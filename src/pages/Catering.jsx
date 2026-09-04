import { useState } from 'react'
import Seo from '../components/Seo'
import Breadcrumbs from '../components/Breadcrumbs'
import Modal from '../components/Modal'
import { trackEvent } from '../analytics'
import { TELEFONO, TELEFONO_TEL, HORARIO, DIRECCION, MAPS_URL } from '../data/negocio'
import '../components/localpage.css'
import '../components/catering.css'

import cateringHeroSet from '../assets/catering.webp?w=768;1200;1600&format=webp&quality=82&as=srcset'
import cateringHeroUrl from '../assets/catering.webp?w=1200&format=webp&quality=82&as=url'

// Vistas previas del catálogo, generadas del PDF con
// scripts/catalogo-catering.mjs. Se cargan en orden de página.
const paginas = Object.entries(
  import.meta.glob('../assets/catering/pagina-*.webp', { eager: true, as: 'url' })
)
  .sort(([a], [b]) => {
    const n = (s) => Number(s.match(/pagina-(\d+)/)[1])
    return n(a) - n(b)
  })
  .map(([, url], i) => ({ url, num: i + 1 }))

const PDF_URL = '/catering-2026-precios.pdf'
const PDF_TAMANO = '8,3 MB'

const BREADCRUMB_ITEMS = [
  { label: 'Inicio', to: '/' },
  { label: 'Catering', to: '/catering' },
]

export default function Catering() {
  const [zoom, setZoom] = useState(null)

  return (
    <main className="localPage catering">
      <Seo
        title="Catering para eventos y celebraciones | Kilo y Cuarto"
        description="Catálogo de catering 2026 de Kilo y Cuarto: empanadas, fritos y finger food para reuniones, celebraciones y eventos en San Fernando de Henares. Consúltalo online o descárgalo."
        path="/catering"
      />

      <Breadcrumbs items={BREADCRUMB_ITEMS} />

      {/* Cabecera con la foto de catering del carrusel de la portada */}
      <header className="catering__hero">
        <img
          className="catering__heroImg"
          src={cateringHeroUrl}
          srcSet={cateringHeroSet}
          sizes="100vw"
          alt="Mesa de catering de Kilo y Cuarto preparada para un evento"
          width="1200"
          height="675"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="catering__heroOverlay">
          <p className="localPage__eyebrow">Kilo y Cuarto</p>
          <h1>Catering para tus celebraciones</h1>
          <p className="catering__heroTexto">
            Empanadas, fritos y finger food para reuniones, comuniones,
            cumpleaños y eventos de empresa. Cuenta con nosotros para tus
            momentos más especiales.
          </p>
        </div>
      </header>

      <div className="localPage__body">
        <h2>Nuestro catálogo de catering 2026</h2>
        <p>
          Estas son las ocho páginas del catálogo, con todos los productos y
          sus precios. Toca cualquier página para verla a pantalla completa, o
          descárgate el PDF si prefieres consultarlo con calma o enviárselo a
          alguien.
        </p>

        <div className="catering__acciones">
          <a
            className="btn btn--primary"
            href={PDF_URL}
            download
            onClick={() => trackEvent('descarga_catalogo_catering', { formato: 'pdf' })}
          >
            Descargar el catálogo (PDF, {PDF_TAMANO})
          </a>
          <a
            className="btn"
            href={PDF_URL}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackEvent('ver_catalogo_catering', { formato: 'pdf' })}
          >
            Abrir en una pestaña nueva
          </a>
        </div>

        <ol className="catering__paginas">
          {paginas.map(({ url, num }) => (
            <li key={num}>
              <button
                type="button"
                className="catering__pagina"
                onClick={() => {
                  setZoom({ url, num })
                  trackEvent('ver_pagina_catering', { pagina: num })
                }}
                aria-label={`Ampliar la página ${num} del catálogo de catering`}
              >
                <img
                  src={url}
                  alt={`Página ${num} del catálogo de catering de Kilo y Cuarto`}
                  width="1400"
                  height="1980"
                  loading={num <= 2 ? 'eager' : 'lazy'}
                  decoding="async"
                />
                <span className="catering__num">{num}</span>
              </button>
            </li>
          ))}
        </ol>

        <h2>Cómo hacer tu encargo</h2>
        <p>
          Dinos la fecha, el número de personas y qué te apetece del catálogo, y
          te preparamos el presupuesto. Si no tienes claro qué elegir, cuéntanos
          qué tipo de evento es y te orientamos: llevamos desde 1994 preparando
          comida para celebraciones.
        </p>

        <section className="localPage__info">
          <h2>Consúltanos</h2>
          <ul className="localPage__infoGrid">
            <li>
              <strong>Teléfono:</strong>{' '}
              <a href={`tel:${TELEFONO_TEL}`}>{TELEFONO}</a>
            </li>
            <li>
              <strong>Dirección:</strong>{' '}
              <a href={MAPS_URL} target="_blank" rel="noreferrer">{DIRECCION}</a>
            </li>
            <li><strong>Horario:</strong> {HORARIO}</li>
          </ul>
          <div className="localPage__actions">
            <a className="btn btn--primary" href={`tel:${TELEFONO_TEL}`}>Llamar y consultar</a>
            <a className="btn" href="/contacto?tipo=catering">Pedir presupuesto</a>
            <a className="btn" href="/productos">Ver la carta</a>
          </div>
        </section>

        <nav className="localPage__links" aria-label="Otras páginas">
          <h2>También te puede interesar</h2>
          <ul>
            <li><a href="/asados-por-encargo">Asados por encargo</a></li>
            <li><a href="/paellas-san-fernando-de-henares">Paellas y arroces por encargo</a></li>
            <li><a href="/productos">Toda nuestra carta</a></li>
          </ul>
        </nav>
      </div>

      <Modal isOpen={!!zoom} onClose={() => setZoom(null)}>
        {zoom && (
          <img
            className="catering__modalImg"
            src={zoom.url}
            alt={`Página ${zoom.num} del catálogo de catering de Kilo y Cuarto`}
          />
        )}
      </Modal>
    </main>
  )
}
