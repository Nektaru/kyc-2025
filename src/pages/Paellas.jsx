import Seo from '../components/Seo'
import Breadcrumbs from '../components/Breadcrumbs'
import JsonLd from '../components/JsonLd'
import TablaPaellas from '../components/TablaPaellas'
import { menuPaellasJsonLd } from '../data/paellas'
import '../components/localpage.css'

import paellaValenciana from '../assets/products/paella-valenciana.webp'
import paellaPulpo from '../assets/products/paella-pulpo-gambones.webp'
import arrozNegro from '../assets/products/arroz-negro.webp'
import paellasKyc from '../assets/ofertas/paellas-kyc.webp'

const BREADCRUMB_ITEMS = [
  { label: 'Inicio', to: '/' },
  { label: 'Paellas y arroces', to: '/paellas-san-fernando-de-henares' },
]

// Carta de arroces en datos estructurados: ayuda a que Google entienda que
// esto es una carta de paellas de un negocio de San Fernando de Henares y no
// una página cualquiera que habla de paellas.
const MENU_JSONLD = menuPaellasJsonLd(
  'https://www.elkiloycuarto.es/paellas-san-fernando-de-henares'
)

export default function Paellas() {
  return (
    <main className="localPage">
      <Seo
        title="Paellas para llevar en San Fernando de Henares | Kilo y Cuarto"
        description="Paellas y arroces por encargo en San Fernando de Henares: valenciana, mixta, marisco, arroz negro, bogavante y más. Consulta tamaños y precios."
        path="/paellas-san-fernando-de-henares"
      />

      <JsonLd id="paellas-menu-jsonld" data={MENU_JSONLD} />

      <Breadcrumbs items={BREADCRUMB_ITEMS} />

      <header className="localPage__hero">
        <p className="localPage__eyebrow">Kilo y Cuarto</p>
        {/* H1 original: esta página ya posiciona en la primera página de
            Google, así que no se toca. */}
        <h1>Paellas y arroces para llevar en San Fernando de Henares</h1>
        <p className="localPage__intro">
          Arroces cocinados como en casa, a fuego lento y con producto
          fresco. Ideales para comidas familiares, celebraciones o cualquier
          domingo en el que no te apetezca cocinar.
        </p>
      </header>

      <div className="localPage__body">
        <h2>Variedades, tamaños y precios</h2>
        <p>
          Preparamos las paellas y arroces por encargo, en dos tamaños:{' '}
          <strong>8–9 raciones</strong> y <strong>11–12 raciones</strong>. Estos
          son los que hacemos habitualmente:
        </p>

        <TablaPaellas />

        <p>
          La disponibilidad de cada variedad puede variar según el día y la
          temporada, así que te recomendamos consultarnos al hacer el encargo.
        </p>

        <div className="localPage__gallery">
          <figure>
            <img
              src={paellaValenciana}
              alt="Paella valenciana casera de Kilo y Cuarto"
              width="900"
              height="600"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Paella valenciana</figcaption>
          </figure>
          <figure>
            <img
              src={paellaPulpo}
              alt="Paella de pulpo y gambones de Kilo y Cuarto"
              width="900"
              height="600"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Paella de pulpo y gambones</figcaption>
          </figure>
          <figure>
            <img
              src={arrozNegro}
              alt="Arroz negro casero de Kilo y Cuarto"
              width="900"
              height="600"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Arroz negro</figcaption>
          </figure>
        </div>

        <figure className="localPage__figure">
          <img
            src={paellasKyc}
            alt="Cartel de paellas de Kilo y Cuarto: valenciana, marisco y arroz negro"
            width="1920"
            height="1080"
            loading="lazy"
            decoding="async"
          />
          <figcaption>Cartel con la oferta de paellas del local</figcaption>
        </figure>

        <h2>Cómo encargar tu paella</h2>
        <p>
          Los arroces se preparan por encargo, así que lo mejor es llamarnos
          con antelación para indicarnos el tipo de paella, el tamaño y el día
          y la hora a la que quieres recogerla. Así te aseguras de que esté
          lista cuando pasas a por ella.
        </p>
        <p>
          Las paellas se entregan en su propia paellera, por la que se deja una{' '}
          <strong>fianza de 20 €</strong> que te devolvemos cuando nos traes la
          paellera de vuelta.
        </p>

        <section className="localPage__info">
          <h2>Datos de recogida</h2>
          <ul className="localPage__infoGrid">
            <li>
              <strong>Dirección:</strong>{' '}
              <a
                href="https://www.google.com/maps/place/Kilo+y+Cuarto/@40.4288709,-3.5362986,758m/data=!3m1!1e3!4m6!3m5!1s0xd42308f645812db:0x7daded5415031301!8m2!3d40.4288668!4d-3.5337237!16s%2Fg%2F1hhvx128l?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
              >
                Calle Toledo 2, 28830 San Fernando de Henares (Madrid)
              </a>
            </li>
            <li>
              <strong>Teléfono:</strong> <a href="tel:+34916716618">91 671 66 18</a>
            </li>
            <li><strong>Horario:</strong> lunes a domingo, de 09:30 a 15:30</li>
          </ul>
          <div className="localPage__actions">
            <a className="btn btn--primary" href="tel:+34916716618">Consultar y encargar</a>
            <a className="btn" href="/productos#paellas-arroces">Ver la carta completa</a>
            <a
              className="btn"
              href="https://www.google.com/maps?ll=40.428867,-3.533724&z=17&t=m&hl=es&gl=ES&mapclient=embed&cid=9056155371097494273"
              target="_blank"
              rel="noreferrer"
            >
              Cómo llegar
            </a>
          </div>
        </section>

        <nav className="localPage__links" aria-label="Otras especialidades">
          <h2>También te puede interesar</h2>
          <ul>
            <li><a href="/pollo-asado-san-fernando-de-henares">Pollo asado</a></li>
            <li><a href="/asados-por-encargo">Asados por encargo</a></li>
            <li><a href="/ofertas">Menú del día y ofertas</a></li>
            <li><a href="/paellas-coslada">Paellas para recoger cerca de Coslada</a></li>
          </ul>
        </nav>
      </div>
    </main>
  )
}
