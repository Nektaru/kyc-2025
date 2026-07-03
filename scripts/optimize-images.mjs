import sharp from 'sharp'
import fs from 'node:fs'
import path from 'node:path'

const log = (label, before, after, dims) =>
  console.log(
    `${label.padEnd(26)} ${(before / 1024).toFixed(0).padStart(5)} KB -> ` +
      `${(after / 1024).toFixed(0).padStart(4)} KB (-${(100 - (after / before) * 100).toFixed(0)}%)  ${dims}`
  )

// Tamaño objetivo (lado más largo, en px) ~2x del tamaño en que se MUESTRA
// cada imagen, según el informe de PageSpeed. Nunca amplía (withoutEnlargement).
const CONFIG = {
  // --- Home: tarjetas mostradas a 450x300 -> objetivo 900 ---
  'paletilla-cochinillo.webp': { max: 900, q: 75 },
  'arroz negro.webp': { max: 900, q: 75 },
  'Croquetas-mix.webp': { max: 900, q: 75 },
  // --- Home: imágenes mostradas a 550x550 / 750x500 -> objetivo 1100 ---
  'pulpoygambones.webp': { max: 1100, q: 75 },
  'verdur.webp': { max: 1100, q: 75 },
  'cocinera.webp': { max: 1100, q: 75 },
  'imagen1.webp': { max: 1024, q: 72 }, // ya es 1024; sobre todo recomprimir
  // --- Logo: es line-art con texto; necesita calidad alta y resolución
  //     generosa (3x) o se ve borroso. No comprimir agresivamente. ---
  'logo.webp': { max: 2000, q: 92 },
  // --- Héroes a pantalla completa (LCP): calidad ALTA, son la primera
  //     impresión de la web. Mejor peso algo mayor que verse borrosos. ---
  'pollo2.webp': { max: 1920, q: 88 },
  'slide2.webp': { max: 1920, q: 88 },
  'catering.webp': { max: 1920, q: 88 },
}
const DEFAULT = { max: 1200, q: 76 } // resto (incluye fotos de la carta)

function walk(d) {
  let r = []
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f)
    const s = fs.statSync(p)
    if (s.isDirectory()) r = r.concat(walk(p))
    else if (/\.webp$/i.test(f)) r.push(p)
  }
  return r
}

let totalBefore = 0
let totalAfter = 0

for (const file of walk('src/assets')) {
  const name = path.basename(file)
  const cfg = CONFIG[name] || DEFAULT
  const input = fs.readFileSync(file)
  const meta = await sharp(input).metadata()

  let pipeline = sharp(input)
  if (Math.max(meta.width, meta.height) > cfg.max) {
    pipeline = pipeline.resize({ width: cfg.max, height: cfg.max, fit: 'inside', withoutEnlargement: true })
  }
  const out = await pipeline.webp({ quality: cfg.q, effort: 6 }).toBuffer()

  if (out.length < input.length - 1024) {
    const nm = await sharp(out).metadata()
    fs.writeFileSync(file, out)
    log(name, input.length, out.length, `${meta.width}x${meta.height} -> ${nm.width}x${nm.height}`)
    totalBefore += input.length
    totalAfter += out.length
  }
}

console.log(
  `\nTotal: ${(totalBefore / 1024 / 1024).toFixed(2)} MB -> ` +
    `${(totalAfter / 1024 / 1024).toFixed(2)} MB (-${(100 - (totalAfter / totalBefore) * 100).toFixed(0)}%)`
)
