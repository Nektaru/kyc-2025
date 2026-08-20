import Seo from '../components/Seo'
import Breadcrumbs from '../components/Breadcrumbs'
import Faq from '../components/Faq'
import MapEmbed from '../components/MapEmbed'
import { MAPS_URL, DIRECCION, TELEFONO, TELEFONO_TEL, HORARIO } from '../data/negocio'
import '../components/localpage.css'

import polloAsadoGif from '../assets/pollo-asado.gif'
import pollosEstrellas from '../assets/ofertas/pollos-y-estrellas.webp'
import panaderas from '../assets/products/panaderas.webp'

const BREADCRUMB_ITEMS = [
  { label: 'Inicio', to: '/' },
  { label: 'Pollos asados cerca de Coslada', to: '/pollos-asados-coslada' },
]

const PREGUNTAS = [
  {
    p: '¿Hace falta encargar el pollo con antelación?',
    r: 'No. Asamos pollos durante toda la mañana y siempre hay disponibles. Solo recomendamos llamar si vas a venir pasadas las 15:00, que es la única franja en la que no podemos asegurarte que queden.',
  },
  {
    p: '¿Dónde recojo el pedido si vengo desde Coslada?',
    r: `La recogida es en nuestra tienda, en ${DIRECCION}. Estamos junto al límite entre los dos municipios, así que desde buena parte de Coslada es un trayecto corto. En el mapa de esta página puedes ver la ubicación exacta y calcular tu ruta.`,
  },
  {
    p: '¿Qué lleva el pollo asado?',
    r: 'Pollo entero asado lentamente en nuestro asador, con la mezcla de especias de la casa y nuestra salsa especial. Puedes añadirle patatas y otros complementos.',
  },
  {
    p: '¿Tenéis aparcamiento?',
    r: 'Estamos en Calle Toledo 2, en zona de calle. Lo más práctico es abrir la ubicación en Google Maps antes de venir para ver cómo está la zona.',
  },
]

export default function PollosAsadosCoslada() {
  return (
    <main className="localPage">
      <Seo
        title="Pollos asados cerca de Coslada | Kilo y Cuarto"
        description="Pollos asados para llevar muy cerca de Coslada. Recoge tu pedido en Kilo y Cuarto, junto al límite con San Fernando de Henares. Abiertos todos los días."
        path="/pollos-asados-coslada"
      />

      <Breadcrumbs items={BREADCRUMB_ITEMS} />

      <header className="localPage__hero">
        <p className="localPage__eyebrow">Kilo y Cuarto</p>
        <h1>Pollos asados para llevar junto a Coslada</h1>
        <p className="localPage__intro">
          Asamos pollos cada mañana en Calle Toledo 2, a escasos metros del
          límite con Coslada. Sin reservas ni esperas: pasas, lo recoges y te
          lo llevas caliente.
        </p>
      </header>

      <div className="localPage__body">
        <h2>Si buscas pollos asados en Coslada, estamos a un paso</h2>
        <p>
          Kilo y Cuarto no está dentro de Coslada: nuestra tienda está en{' '}
          <strong>{DIRECCION}</strong>, ya en San Fernando de Henares. Pero el
          local se encuentra prácticamente en la frontera entre los dos
          municipios, a una calle de diferencia, así que para mucha gente de
          Coslada somos el asador que tienen más a mano. Más abajo tienes el
          mapa para que compruebes tú mismo la distancia desde tu casa.
        </p>

        <figure className="localPage__figure localPage__figure--gif">
          <img
            src={polloAsadoGif}
            alt="Pollos asados girando en el asador de Kilo y Cuarto"
            width="320"
            height="180"
            loading="lazy"
            decoding="async"
          />
        </figure>

        <h2>Cómo es nuestro pollo</h2>
        <p>
          Lo asamos despacio, a fuego controlado, hasta que la piel queda
          dorada y crujiente y la carne jugosa por dentro. Lo acompañamos con
          nuestra salsa especial, la misma receta desde 1994. La primera barra
          sale sobre las 11:00 y seguimos asando hasta las 15:00.
        </p>

        <div className="localPage__gallery">
          <figure>
            <img
              src={pollosEstrellas}
              alt="Oferta de pollo asado con complementos de Kilo y Cuarto"
              width="1179"
              height="660"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Pollo con complementos</figcaption>
          </figure>
          <figure>
            <img
              src={panaderas}
              alt="Patatas panaderas con pimiento y cebolla"
              width="1200"
              height="800"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Patatas panaderas</figcaption>
          </figure>
        </div>

        <p>
          Además del pollo solo, tenemos ofertas con complementos —patatas,
          ensaladilla, croquetas y más— pensadas para llevar la comida
          resuelta. Puedes verlas en{' '}
          <a href="/ofertas">ofertas y menú del día</a>, y el resto de platos
          en <a href="/productos">nuestra carta</a>.
        </p>

        <h2>Dónde estamos</h2>
        <p>
          Esta es nuestra ubicación real. Ábrela en Google Maps para calcular
          la ruta desde donde estés.
        </p>
        <div className="localPage__mapa">
          <MapEmbed title="Ubicación de Kilo y Cuarto, junto al límite con Coslada" />
        </div>

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
            <a className="btn btn--primary" href={`tel:${TELEFONO_TEL}`}>Llamar</a>
            <a className="btn" href="/ofertas">Ver ofertas de pollo</a>
            <a className="btn" href="/productos">Ver la carta</a>
            <a className="btn" href={MAPS_URL} target="_blank" rel="noreferrer">Cómo llegar</a>
          </div>
        </section>

        <Faq items={PREGUNTAS} />

        <nav className="localPage__links" aria-label="Otras páginas">
          <h2>También te puede interesar</h2>
          <ul>
            <li><a href="/paellas-coslada">Paellas para recoger cerca de Coslada</a></li>
            <li><a href="/comida-para-llevar-coslada">Comida casera para llevar en la zona de Coslada</a></li>
            <li><a href="/pollo-asado-san-fernando-de-henares">Pollo asado en San Fernando de Henares</a></li>
          </ul>
        </nav>
      </div>
    </main>
  )
}
