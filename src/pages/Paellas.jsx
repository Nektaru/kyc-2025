import Seo from '../components/Seo'
import Breadcrumbs from '../components/Breadcrumbs'
import '../components/localpage.css'

import paellaValenciana from '../assets/products/paella-valenciana.webp'
import paellaPulpo from '../assets/products/paella-pulpo-gambones.webp'
import arrozNegro from '../assets/products/arroz-negro.webp'
import paellasKyc from '../assets/ofertas/paellas-kyc.webp'

const BREADCRUMB_ITEMS = [
  { label: 'Inicio', to: '/' },
  { label: 'Paellas y arroces', to: '/paellas-san-fernando-de-henares' },
]

export default function Paellas() {
  return (
    <main className="localPage">
      <Seo
        title="Paellas para llevar en San Fernando de Henares | Kilo y Cuarto"
        description="Paellas y arroces caseros por encargo en San Fernando de Henares: valenciana, de pulpo y gambones, arroz negro y más. Consulta disponibilidad al 91 671 66 18."
        path="/paellas-san-fernando-de-henares"
      />

      <Breadcrumbs items={BREADCRUMB_ITEMS} />

      <header className="localPage__hero">
        <p className="localPage__eyebrow">Kilo y Cuarto</p>
        <h1>Paellas y arroces para llevar en San Fernando de Henares</h1>
        <p className="localPage__intro">
          Arroces cocinados como en casa, a fuego lento y con producto
          fresco. Ideales para comidas familiares, celebraciones o cualquier
          domingo en el que no te apetezca cocinar.
        </p>
      </header>

      <div className="localPage__body">
        <h2>Nuestras variedades</h2>
        <p>
          Preparamos distintos tipos de paella y arroz según el día y la
          disponibilidad de producto fresco. Entre las que solemos elaborar
          se encuentran:
        </p>
        <ul>
          <li><strong>Paella mixta</strong> — carne y marisco, la más pedida para grupos.</li>
          <li><strong>Paella valenciana</strong> — receta tradicional con pollo y verduras.</li>
          <li><strong>Arroz a banda</strong> — arroz de pescado, sabroso y untuoso.</li>
          <li><strong>Arroz negro</strong> — con tinta de calamar y un sabor intenso a mar.</li>
          <li><strong>Arroz con bogavante</strong> — para ocasiones especiales.</li>
          <li><strong>Paella de pulpo y gambones</strong> — una de nuestras combinaciones más pedidas.</li>
          <li><strong>Arroz de secreto ibérico con setas y trigueros</strong> — nuestra versión más de cuchara.</li>
        </ul>
        <p>
          La disponibilidad de cada variedad puede variar según el día y la
          temporada. Te recomendamos consultarnos por teléfono para confirmar
          qué arroces tenemos disponibles y encargar el tuyo.
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
          con antelación para indicarnos el tipo de paella, el número de
          raciones y el día que quieres recogerla. Así te aseguras de que
          esté lista a la hora que necesitas.
        </p>

        <section className="localPage__info">
          <h2>Datos de recogida</h2>
          <ul className="localPage__infoGrid">
            <li>
              <strong>Dirección:</strong>{' '}
              <a
                href="https://www.google.com/maps/place/Kilo+y+Cuarto/@40.4288709,-3.5362986,17z"
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
          </ul>
        </nav>
      </div>
    </main>
  )
}
