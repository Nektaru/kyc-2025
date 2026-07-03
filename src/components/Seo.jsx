import { useEffect } from 'react'

// Origen dinámico: funciona igual en http o https (tras activar SSL) y en local.
const getOrigin = () =>
  typeof window !== 'undefined'
    ? window.location.origin
    : 'https://www.elkiloycuarto.es'

function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!content) {
    if (el) el.remove()
    return
  }
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * Metadatos SEO por página para la SPA.
 * @param {string} title       Título de la pestaña / buscador
 * @param {string} description Meta description
 * @param {string} path        Ruta canónica (ej. "/productos")
 * @param {boolean} noindex    true para páginas que no deben aparecer en Google
 * @param {string} image       Imagen social (por defecto /og-image.webp)
 */
export default function Seo({
  title,
  description,
  path = '',
  noindex = false,
  image = '/og-image.webp',
}) {
  useEffect(() => {
    const origin = getOrigin()
    const url = `${origin}${path}`
    const imageUrl = image.startsWith('http') ? image : `${origin}${image}`

    if (title) document.title = title
    upsertMeta('name', 'description', description)
    upsertMeta(
      'name',
      'robots',
      noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'
    )
    upsertLink('canonical', url)

    // Open Graph
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:image', imageUrl)

    // Twitter
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', imageUrl)
  }, [title, description, path, noindex, image])

  return null
}
