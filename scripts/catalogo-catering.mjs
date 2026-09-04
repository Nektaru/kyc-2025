// Genera las vistas previas del catálogo de catering a partir del PDF.
//
// El PDF pesa ~8 MB: incrustarlo tal cual haría la página muy lenta en móvil
// (y muchos navegadores móviles ni siquiera muestran PDF embebidos). Se
// renderiza cada página a .webp para el visor de la web, y el PDF se deja
// aparte solo para quien quiera descargarlo.
//
// El render se hace dentro de Chrome (puppeteer, que ya usamos para el
// pre-renderizado) porque pdf.js necesita un <canvas> de verdad.
//
// Uso: node scripts/catalogo-catering.mjs [ruta-al-pdf]

import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import puppeteer from 'puppeteer'
import sharp from 'sharp'

const PDF = process.argv[2] || 'catering-2026-precios.pdf'
const SALIDA = 'src/assets/catering'
const PORT = 4611
const ESCALA = 2 // A4 a ~1650 px de ancho: nítido al ampliar
const ANCHO_FINAL = 1400

const PDFJS_DIR = path.resolve('node_modules/pdfjs-dist')
const MIME = { '.mjs': 'text/javascript', '.js': 'text/javascript', '.pdf': 'application/pdf', '.html': 'text/html' }

// Servidor mínimo: sirve pdf.js y el propio PDF al navegador.
const server = http.createServer((req, res) => {
  const url = decodeURIComponent(req.url.split('?')[0])
  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    return res.end('<!doctype html><meta charset="utf-8"><body></body>')
  }
  const archivo = url === '/documento.pdf' ? path.resolve(PDF) : path.join(PDFJS_DIR, url)
  if (!fs.existsSync(archivo) || !fs.statSync(archivo).isFile()) {
    res.writeHead(404)
    return res.end('no')
  }
  res.writeHead(200, { 'Content-Type': MIME[path.extname(archivo)] || 'application/octet-stream' })
  fs.createReadStream(archivo).pipe(res)
})
await new Promise((r) => server.listen(PORT, r))

fs.mkdirSync(SALIDA, { recursive: true })
const navegador = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] })
const pagina = await navegador.newPage()
await pagina.goto(`http://localhost:${PORT}/`, { waitUntil: 'domcontentloaded' })

const numPaginas = await pagina.evaluate(async (port) => {
  const pdfjs = await import(`http://localhost:${port}/legacy/build/pdf.mjs`)
  pdfjs.GlobalWorkerOptions.workerSrc = `http://localhost:${port}/legacy/build/pdf.worker.mjs`
  window.__pdfjs = pdfjs
  window.__doc = await pdfjs.getDocument(`http://localhost:${port}/documento.pdf`).promise
  return window.__doc.numPages
}, PORT)

const mb = (fs.statSync(PDF).size / 1024 / 1024).toFixed(2)
console.log(`Catálogo: ${numPaginas} páginas (${mb} MB)`)

let total = 0
for (let i = 1; i <= numPaginas; i++) {
  const dataUrl = await pagina.evaluate(async (i, escala) => {
    const p = await window.__doc.getPage(i)
    const viewport = p.getViewport({ scale: escala })
    const canvas = document.createElement('canvas')
    canvas.width = Math.round(viewport.width)
    canvas.height = Math.round(viewport.height)
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = '#fff'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    await p.render({ canvasContext: ctx, viewport }).promise
    return canvas.toDataURL('image/png')
  }, i, ESCALA)

  const destino = `${SALIDA}/pagina-${i}.webp`
  await sharp(Buffer.from(dataUrl.split(',')[1], 'base64'))
    .resize({ width: ANCHO_FINAL, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(destino)

  const kb = fs.statSync(destino).size / 1024
  total += kb
  console.log(`  pagina-${i}.webp -> ${kb.toFixed(0)} KB`)
}

await navegador.close()
server.close()
console.log(`Total vistas previas: ${(total / 1024).toFixed(2)} MB (el PDF sigue siendo ${mb} MB)`)
