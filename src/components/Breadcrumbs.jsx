import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './breadcrumbs.css'

const PROD_ORIGIN = 'https://www.elkiloycuarto.es'

function upsertJsonLd(id, data) {
  let el = document.getElementById(id)
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.id = id
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

/**
 * Migas de pan visibles + datos estructurados BreadcrumbList.
 * items: [{ label: 'Inicio', to: '/' }, { label: 'Pollo asado', to: '/pollo-asado-san-fernando-de-henares' }]
 */
export default function Breadcrumbs({ items }) {
  useEffect(() => {
    upsertJsonLd('breadcrumb-jsonld', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.label,
        item: `${PROD_ORIGIN}${item.to}`,
      })),
    })
    return () => {
      const el = document.getElementById('breadcrumb-jsonld')
      if (el) el.remove()
    }
  }, [items])

  return (
    <nav className="breadcrumbs" aria-label="Migas de pan">
      <ol>
        {items.map((item, i) => (
          <li key={item.to}>
            {i === items.length - 1 ? (
              <span aria-current="page">{item.label}</span>
            ) : (
              <Link to={item.to}>{item.label}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
