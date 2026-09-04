import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import puppeteer from 'puppeteer'

const DIST = path.resolve('dist')
const PORT = 4599
const ROUTES = [
  '/',
  '/ofertas',
  '/resenas',
  '/productos',
  '/pollo-asado-san-fernando-de-henares',
  '/paellas-san-fernando-de-henares',
  '/asados-por-encargo',
  '/catering',
  '/pollos-asados-coslada',
  '/comida-para-llevar-coslada',
  '/paellas-coslada',
  '/about',
  '/contacto',
  '/aviso-legal',
  '/cookies',
  '/privacidad',
]

// Incrusta el CSS principal (index-*.css) directamente en el HTML y elimina el
// <link>, para quitarlo de la ruta crítica (deja de bloquear el renderizado).
function inlineMainCss(html) {
  const linkRe = /<link\b[^>]*rel="stylesheet"[^>]*href="(\/assets\/index-[^"]+\.css)"[^>]*>/i
  const m = html.match(linkRe)
  if (!m) return html
  const cssPath = path.join(DIST, m[1])
  if (!fs.existsSync(cssPath)) return html
  const css = fs.readFileSync(cssPath, 'utf8')
  return html.replace(linkRe, `<style>${css}</style>`)
}

const MIME = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.otf': 'font/otf',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.json': 'application/json',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
  '.ico': 'image/x-icon',
}

// Servidor estático que imita el .htaccess: sirve el archivo si existe,
// y si no, devuelve el index.html (fallback SPA) para que React pinte la ruta.
const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent(req.url.split('?')[0])
  const filePath = path.join(DIST, urlPath)
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    res.writeHead(200, { 'Content-Type': MIME[path.extname(filePath)] || 'application/octet-stream' })
    fs.createReadStream(filePath).pipe(res)
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.createReadStream(path.join(DIST, 'index.html')).pipe(res)
  }
})

await new Promise((r) => server.listen(PORT, r))

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
})

for (const route of ROUTES) {
  const page = await browser.newPage()
  await page.goto(`http://localhost:${PORT}${route}`, {
    waitUntil: 'networkidle2',
    timeout: 45000,
  })
  // Espera a que React haya pintado contenido real dentro de #root
  await page
    .waitForSelector('#root main, #root h1, #root h2', { timeout: 20000 })
    .catch(() => {})

  await page.evaluate(() => {
    // Fuerza a AOS a mostrar el contenido (quita el opacity:0 inicial) para que
    // el HTML capturado sea visible también sin JavaScript.
    document.querySelectorAll('[data-aos]').forEach((el) => el.classList.add('aos-animate'))

    // Revierte el media de la hoja de Google Fonts a "print": durante el
    // render el onload lo cambió a "all" (bloqueante). Así el HTML estático
    // conserva la carga NO bloqueante.
    document.querySelectorAll('link[rel="stylesheet"]').forEach((l) => {
      if (l.href.includes('fonts.googleapis.com')) l.media = 'print'
    })
  })

  let html = await page.content()
  html = inlineMainCss(html)
  const outPath =
    route === '/'
      ? path.join(DIST, 'index.html')
      : path.join(DIST, route.replace(/^\//, '') + '.html')
  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(outPath, html)

  const words = await page.evaluate(() =>
    (document.body.innerText || '').trim().split(/\s+/).filter(Boolean).length
  )
  const title = await page.title()
  console.log(`✓ ${route.padEnd(14)} -> ${path.relative(DIST, outPath).padEnd(20)} ${String(words).padStart(4)} palabras | "${title.slice(0, 45)}"`)
  await page.close()
}

await browser.close()
server.close()
console.log('\nPre-render completado.')
