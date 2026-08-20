import Seo from '../components/Seo'
import Breadcrumbs from '../components/Breadcrumbs'
import Faq from '../components/Faq'
import JsonLd from '../components/JsonLd'
import MapEmbed from '../components/MapEmbed'
import TablaPaellas from '../components/TablaPaellas'
import { menuPaellasJsonLd } from '../data/paellas'
import { MAPS_URL, MAPS_RUTA_URL, DIRECCION, TELEFONO, TELEFONO_TEL, HORARIO } from '../data/negocio'
import '../components/localpage.css'

import paellaPulpo from '../assets/products/paella-pulpo-gambones.webp'
import paellaValenciana from '../assets/products/paella-valenciana.webp'

const BREADCRUMB_ITEMS = [
  { label: 'Inicio', to: '/' },
  { label: 'Paellas cerca de Coslada', to: '/paellas-coslada' },
]

const MENU_JSONLD = menuPaellasJsonLd('https://www.elkiloycuarto.es/paellas-coslada')

const PREGUNTAS = [
  {
    p: '¿Con cuánta antelación tengo que encargarla?',
    r: 'Cuanto antes mejor, sobre todo para fines de semana y festivos, que son los días de más encargos. Llámanos y te decimos qué disponibilidad hay para el día que necesitas.',
  },
  {
    p: '¿Qué es la fianza de 20 €?',
    r: 'La paella se entrega en su paellera. Se deja una fianza de 20 € que te devolvemos íntegra cuando traes la paellera de vuelta.',
  },
  {
    p: '¿Cuántas personas comen con cada tamaño?',
    r: 'Hacemos dos tamaños: de 8–9 raciones y de 11–12 raciones. Si no lo tienes claro, dinos cuántos sois y te orientamos al hacer el encargo.',
  },
  {
    p: '¿Puedo recogerla si vivo en Coslada?',
    r: `Sí, aunque la recogida es siempre en nuestra tienda de ${DIRECCION}. Estamos pegados al límite con Coslada, a una calle, así que para mucha gente del municipio es un trayecto corto. Usa el botón de calcular ruta para verlo desde tu dirección.`,
  },
]

export default function PaellasCoslada() {
  return (
    <main className="localPage">
      <Seo
        title="Paellas por encargo cerca de Coslada | Kilo y Cuarto"
        description="Paellas para recoger muy cerca de Coslada: valenciana, mixta, marisco, arroz negro, bogavante y más. Consulta tamaños, precios y encargos."
        path="/paellas-coslada"
      />

      <JsonLd id="paellas-coslada-menu-jsonld" data={MENU_JSONLD} />

      <Breadcrumbs items={BREADCRUMB_ITEMS} />

      <header className="localPage__hero">
        <p className="localPage__eyebrow">Kilo y Cuarto</p>
        <h1>Paellas para llevar junto a Coslada</h1>
        <p className="localPage__intro">
          Arroces por encargo, hechos el mismo día y listos a la hora que nos
          digas. Se recogen en Calle Toledo 2, a un paso del límite con
          Coslada.
        </p>
      </header>

      <div className="localPage__body">
        <h2>Dónde se recoge y por qué te pilla cerca</h2>
        <p>
          Conviene decirlo claro: <strong>no tenemos tienda en Coslada</strong>.
          Kilo y Cuarto está en {DIRECCION}, en San Fernando de Henares. Lo que
          pasa es que el local está justo en la frontera entre los dos
          municipios, a una calle, de modo que para buena parte de Coslada
          venir a por una paella es un trayecto corto. En lugar de darte un
          tiempo de viaje inventado, te dejamos el mapa y el botón para que
          calcules la ruta real desde tu casa.
        </p>

        <div className="localPage__mapa">
          <MapEmbed title="Ubicación de Kilo y Cuarto, junto al límite con Coslada" />
        </div>

        <div className="localPage__actions localPage__actions--sueltas">
          <a className="btn btn--primary" href={MAPS_RUTA_URL} target="_blank" rel="noreferrer">
            Calcular mi ruta
          </a>
          <a className="btn" href={MAPS_URL} target="_blank" rel="noreferrer">
            Ver la ubicación
          </a>
        </div>

        <h2>Cómo hacer el encargo</h2>
        <p>
          Las paellas se hacen por encargo, no las tenemos hechas de antemano.
          El proceso es sencillo: llámanos al{' '}
          <a href={`tel:${TELEFONO_TEL}`}>{TELEFONO}</a> y dinos tres cosas —qué
          arroz quieres, de qué tamaño, y el día y la hora a la que vas a pasar
          a recogerlo. Nosotros la tenemos lista para esa hora.
        </p>
        <p>
          Ten en cuenta que la paella se entrega en su paellera y se deja una{' '}
          <strong>fianza de 20 €</strong>, que se devuelve al traerla de vuelta.
        </p>

        <div className="localPage__gallery">
          <figure>
            <img
              src={paellaPulpo}
              alt="Paella de pulpo y gambones de Kilo y Cuarto"
              width="1100"
              height="1100"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Paella de pulpo y gambones</figcaption>
          </figure>
          <figure>
            <img
              src={paellaValenciana}
              alt="Paella valenciana con pollo y verduras"
              width="1200"
              height="800"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Paella valenciana</figcaption>
          </figure>
        </div>

        <h2>Variedades, tamaños y precios</h2>
        <p>
          Hacemos dos tamaños de cada arroz. Estos son los precios vigentes:
        </p>

        <TablaPaellas />

        <p>
          La disponibilidad depende del día y del producto fresco que haya, así
          que confírmanos la variedad al llamar.
        </p>

        <section className="localPage__info">
          <h2>Datos de recogida</h2>
          <ul className="localPage__infoGrid">
            <li>
              <strong>Dirección:</strong>{' '}
              <a href={MAPS_URL} target="_blank" rel="noreferrer">{DIRECCION}</a>
            </li>
            <li>
              <strong>Teléfono:</strong>{' '}
              <a href={`tel:${TELEFONO_TEL}`}>{TELEFONO}</a>
            </li>
            <li><strong>Horario:</strong> {HORARIO}</li>
          </ul>
          <div className="localPage__actions">
            <a className="btn btn--primary" href={`tel:${TELEFONO_TEL}`}>Llamar y encargar</a>
            <a className="btn" href={MAPS_RUTA_URL} target="_blank" rel="noreferrer">Calcular ruta</a>
            <a className="btn" href="/productos#paellas-arroces">Ver la carta</a>
          </div>
        </section>

        <Faq items={PREGUNTAS} />

        <nav className="localPage__links" aria-label="Otras páginas">
          <h2>También te puede interesar</h2>
          <ul>
            <li><a href="/comida-para-llevar-coslada">Comida casera para llevar en la zona de Coslada</a></li>
            <li><a href="/pollos-asados-coslada">Pollos asados cerca de Coslada</a></li>
            <li><a href="/paellas-san-fernando-de-henares">Paellas por encargo en San Fernando de Henares</a></li>
          </ul>
        </nav>
      </div>
    </main>
  )
}
