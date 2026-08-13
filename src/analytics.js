// Google Analytics 4 — carga diferida y SOLO con consentimiento de cookies.
const GA_ID = 'G-KPQ5549EJZ'
let loaded = false

export function isConsentGiven() {
  try {
    return localStorage.getItem('cookiesAccepted') === 'true'
  } catch {
    return false
  }
}

export function loadGA() {
  if (loaded) return
  if (typeof window === 'undefined') return
  // No medir en desarrollo / pre-render (localhost)
  if (/^(localhost|127\.0\.0\.1)$/.test(window.location.hostname)) return

  loaded = true
  const s = document.createElement('script')
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(s)

  window.dataLayer = window.dataLayer || []
  function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag = gtag
  gtag('js', new Date())
  // envía la primera vista de página automáticamente
  gtag('config', GA_ID)
}

export function trackPageview(path) {
  if (!loaded || !window.gtag) return
  window.gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  })
}

export function trackEvent(name, params = {}) {
  if (!loaded || !window.gtag) return
  window.gtag('event', name, params)
}
