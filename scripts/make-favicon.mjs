// Genera todos los iconos del sitio a partir de new-favicon.png.
//
// Recorta el blanco sobrante para que el dibujo ocupe todo el icono (a 16 px
// cada píxel cuenta), lo centra en un cuadrado con un margen pequeño y lo
// aplana sobre blanco, que es lo que hace que se vea claro y reconocible en la
// pestaña en lugar del icono oscuro anterior.
//
// Uso: node scripts/make-favicon.mjs [origen]

import sharp from 'sharp'
import { writeFileSync } from 'node:fs'

const ORIGEN = process.argv[2] || 'new-favicon.png'
const FONDO = { r: 255, g: 255, b: 255, alpha: 1 }
const MARGEN = 0.06 // 6% de aire alrededor

// 1) Recortar el blanco y cuadrar el dibujo sin deformarlo
const recortado = await sharp(ORIGEN).trim({ threshold: 10 }).toBuffer({ resolveWithObject: true })
const lado = Math.max(recortado.info.width, recortado.info.height)
const cuadrado = await sharp(recortado.data)
  .extend({
    top: Math.round((lado - recortado.info.height) / 2),
    bottom: lado - recortado.info.height - Math.round((lado - recortado.info.height) / 2),
    left: Math.round((lado - recortado.info.width) / 2),
    right: lado - recortado.info.width - Math.round((lado - recortado.info.width) / 2),
    background: FONDO,
  })
  .flatten({ background: FONDO })
  .toBuffer()

// 2) Exportar cada tamaño con su margen
async function icono(destino, tam) {
  const interior = Math.round(tam * (1 - MARGEN * 2))
  const buf = await sharp(cuadrado)
    .resize(interior, interior, { fit: 'contain', background: FONDO })
    .extend({
      top: Math.round((tam - interior) / 2),
      bottom: tam - interior - Math.round((tam - interior) / 2),
      left: Math.round((tam - interior) / 2),
      right: tam - interior - Math.round((tam - interior) / 2),
      background: FONDO,
    })
    // Paleta reducida: es un dibujo de un solo color sobre blanco, así que
    // pesa mucho menos sin verse peor.
    .png({ compressionLevel: 9, palette: true, quality: 90 })
    .toBuffer()
  if (destino) {
    writeFileSync(destino, buf)
    console.log(`  ${destino.padEnd(34)} ${tam}x${tam}  ${(buf.length / 1024).toFixed(1)} KB`)
  }
  return buf
}

console.log('Iconos generados:')
await icono('public/favicon-16x16.png', 16)
await icono('public/favicon-32x32.png', 32)
await icono('public/apple-touch-icon.png', 180)
await icono('public/favicon-512.png', 512)

// 3) favicon.svg: mismo formato que el anterior (un PNG embebido en base64),
//    para no tener que tocar las referencias del index.html.
const png192 = await icono(null, 192)
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192"><image width="192" height="192" href="data:image/png;base64,${png192.toString('base64')}"/></svg>`
writeFileSync('public/favicon.svg', svg)
console.log(`  public/favicon.svg                 192x192  ${(svg.length / 1024).toFixed(1)} KB`)
