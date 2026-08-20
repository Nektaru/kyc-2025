import Seo from '../components/Seo'
import Breadcrumbs from '../components/Breadcrumbs'
import Faq from '../components/Faq'
import MapEmbed from '../components/MapEmbed'
import { MAPS_URL, MAPS_RUTA_URL, DIRECCION, TELEFONO, TELEFONO_TEL, HORARIO } from '../data/negocio'
import '../components/localpage.css'

import croquetas from '../assets/products/croquetas.webp'
import tortilla from '../assets/products/tortilla-patata.webp'
import rusa from '../assets/products/rusa.webp'
import menuLunes from '../assets/ofertas/menu-lunes.webp'

const BREADCRUMB_ITEMS = [
  { label: 'Inicio', to: '/' },
  { label: 'Comida para llevar cerca de Coslada', to: '/comida-para-llevar-coslada' },
]

const PREGUNTAS = [
  {
    p: '¿Estáis en Coslada?',
    r: `No. Nuestra tienda está en ${DIRECCION}, en San Fernando de Henares, pero justo en el límite entre los dos municipios. No tenemos ninguna otra tienda: todo se recoge aquí.`,
  },
  {
    p: '¿Hay que encargar con antelación?',
    r: 'Depende de lo que quieras. El menú del día, los pollos asados y los platos del día están hechos y listos para llevar. Las paellas y los asados grandes sí se hacen por encargo.',
  },
  {
    p: '¿Qué horario tenéis?',
    r: `Abrimos ${HORARIO}. Abrimos también todos los festivos excepto el 25 de diciembre y el 1 de enero.`,
  },
  {
    p: '¿Se puede pedir para un grupo o una celebración?',
    r: 'Sí. Preparamos paellas de hasta 11–12 raciones y asados por encargo como paletillas, cochinillo o capón relleno. Lo mejor es llamarnos para hablarlo con tiempo.',
  },
]

export default function ComidaParaLlevarCoslada() {
  return (
    <main className="localPage">
      <Seo
        title="Comida para llevar cerca de Coslada | Kilo y Cuarto"
        description="Comida casera para llevar muy cerca de Coslada: pollos asados, paellas, menú del día, croquetas y platos preparados. Cocinando desde 1994."
        path="/comida-para-llevar-coslada"
      />

      <Breadcrumbs items={BREADCRUMB_ITEMS} />

      <header className="localPage__hero">
        <p className="localPage__eyebrow">Kilo y Cuarto</p>
        <h1>Comida casera para llevar cerca de Coslada</h1>
        <p className="localPage__intro">
          Cocinamos cada mañana en Calle Toledo 2, junto al límite con Coslada.
          Menú del día, pollos asados, paellas y platos de siempre, listos para
          recoger.
        </p>
      </header>

      <div className="localPage__body">
        <h2>Una cocina de barrio a un paso de Coslada</h2>
        <p>
          Kilo y Cuarto está en San Fernando de Henares, en{' '}
          <strong>{DIRECCION}</strong>. No tenemos tienda en Coslada, pero el
          local está prácticamente en la frontera entre ambos municipios, a una
          calle de diferencia. Por eso mucha gente de Coslada nos tiene más
          cerca que otras opciones de su propio pueblo. Aquí abajo puedes ver
          el mapa y calcular la ruta desde tu dirección.
        </p>
        <p>
          Somos un negocio familiar que lleva cocinando desde 1994. Todo se
          hace aquí cada mañana, sin bases industriales: por eso lo que hay
          disponible cambia un poco de un día a otro.
        </p>

        <h2>Qué te puedes llevar</h2>

        <h3 className="localPage__sub">Menú del día, de lunes a viernes</h3>
        <p>
          De lunes a viernes (no festivos) tenemos menú del día casero. Cambia
          cada día; el de la jornada está siempre publicado en{' '}
          <a href="/ofertas">la página de ofertas</a>.
        </p>
        <figure className="localPage__figure">
          <img
            src={menuLunes}
            alt="Cartel del menú del día de Kilo y Cuarto"
            width="1920"
            height="1080"
            loading="lazy"
            decoding="async"
          />
        </figure>

        <h3 className="localPage__sub">Platos caseros preparados</h3>
        <p>
          Croquetas, tortillas, ensaladilla, albóndigas, pisto, rabo de toro,
          pescados, pastas… Lo típico de una cocina de casa, hecho para que
          solo tengas que calentarlo. Puedes ver todo en{' '}
          <a href="/productos">nuestra carta</a>, con la descripción y los
          alérgenos de cada plato.
        </p>

        <div className="localPage__gallery">
          <figure>
            <img src={croquetas} alt="Croquetas caseras recién fritas" width="1200" height="800" loading="lazy" decoding="async" />
            <figcaption>Croquetas caseras</figcaption>
          </figure>
          <figure>
            <img src={tortilla} alt="Tortilla de patata casera" width="1200" height="800" loading="lazy" decoding="async" />
            <figcaption>Tortilla de patata</figcaption>
          </figure>
          <figure>
            <img src={rusa} alt="Ensaladilla rusa con huevo y aceitunas" width="1200" height="800" loading="lazy" decoding="async" />
            <figcaption>Ensaladilla rusa</figcaption>
          </figure>
        </div>

        <h3 className="localPage__sub">Pollos asados</h3>
        <p>
          Asamos durante toda la mañana y no hace falta encargarlos. Tienes el
          detalle en <a href="/pollos-asados-coslada">pollos asados cerca de Coslada</a>.
        </p>

        <h3 className="localPage__sub">Paellas y arroces</h3>
        <p>
          Por encargo, en dos tamaños, desde la valenciana hasta el arroz con
          bogavante. Tamaños y precios en{' '}
          <a href="/paellas-coslada">paellas para recoger cerca de Coslada</a>.
        </p>

        <h3 className="localPage__sub">Encargos especiales</h3>
        <p>
          Paletilla de Aranda, cochinillo, capón relleno y otros asados para
          celebraciones, siempre bajo encargo:{' '}
          <a href="/asados-por-encargo">asados por encargo</a>.
        </p>

        <h2>Dónde recoger</h2>
        <p>
          Todo se recoge en la tienda. Este es el mapa real; puedes abrirlo
          para calcular tu ruta.
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
            <a className="btn" href="/productos">Ver la carta</a>
            <a className="btn" href="/ofertas">Ver ofertas</a>
            <a className="btn" href={MAPS_RUTA_URL} target="_blank" rel="noreferrer">Calcular ruta</a>
          </div>
        </section>

        <Faq items={PREGUNTAS} />

        <nav className="localPage__links" aria-label="Otras páginas">
          <h2>También te puede interesar</h2>
          <ul>
            <li><a href="/pollos-asados-coslada">Pollos asados cerca de Coslada</a></li>
            <li><a href="/paellas-coslada">Paellas para recoger cerca de Coslada</a></li>
            <li><a href="/">Comida para llevar en San Fernando de Henares</a></li>
          </ul>
        </nav>
      </div>
    </main>
  )
}
