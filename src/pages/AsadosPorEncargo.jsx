import Seo from '../components/Seo'
import Breadcrumbs from '../components/Breadcrumbs'
import '../components/localpage.css'

import paletillaAranda from '../assets/products/paletilla-aranda.webp'
import paletillaCochinillo from '../assets/products/paletilla-cochinillo.webp'
import cochinillo from '../assets/products/cochinillo.webp'
import capon from '../assets/products/capon.webp'

const BREADCRUMB_ITEMS = [
  { label: 'Inicio', to: '/' },
  { label: 'Asados por encargo', to: '/asados-por-encargo' },
]

export default function AsadosPorEncargo() {
  return (
    <main className="localPage">
      <Seo
        title="Asados por encargo en San Fernando de Henares | Kilo y Cuarto"
        description="Paletillas, cochinillo y capón relleno por encargo en San Fernando de Henares. Asados tradicionales para celebraciones, a consultar por teléfono."
        path="/asados-por-encargo"
      />

      <Breadcrumbs items={BREADCRUMB_ITEMS} />

      <header className="localPage__hero">
        <p className="localPage__eyebrow">Kilo y Cuarto</p>
        <h1>Asados por encargo en San Fernando de Henares</h1>
        <p className="localPage__intro">
          Para las comidas que merecen algo más, preparamos asados
          tradicionales por encargo: piel crujiente, carne melosa y la
          guarnición clásica de siempre.
        </p>
      </header>

      <div className="localPage__body">
        <h2>Nuestros asados por encargo</h2>
        <p>
          Estos platos requieren tiempo de horneado y preparación, por lo que
          se elaboran únicamente bajo encargo. Te recomendamos llamarnos con
          antelación, sobre todo si lo necesitas para una fecha señalada, para
          confirmar disponibilidad y condiciones.
        </p>

        <div className="localPage__gallery">
          <figure>
            <img
              src={paletillaAranda}
              alt="Paletilla de Aranda asada de Kilo y Cuarto"
              width="900"
              height="600"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Paletilla de Aranda</figcaption>
          </figure>
          <figure>
            <img
              src={paletillaCochinillo}
              alt="Paletilla de cochinillo asada de Kilo y Cuarto"
              width="900"
              height="600"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Paletilla de cochinillo</figcaption>
          </figure>
          <figure>
            <img
              src={cochinillo}
              alt="Cochinillo asado entero de Kilo y Cuarto"
              width="900"
              height="600"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Cochinillo asado</figcaption>
          </figure>
          <figure>
            <img
              src={capon}
              alt="Capón relleno asado de Kilo y Cuarto"
              width="900"
              height="600"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Capón relleno</figcaption>
          </figure>
        </div>

        <p>
          La <strong>paletilla de Aranda</strong> y la{' '}
          <strong>paletilla de cochinillo</strong> se asan lentamente a baja
          temperatura hasta lograr una piel crujiente y una carne melosa,
          acompañadas de champiñones al ajillo, patata panadera y la salsa
          natural del propio asado. El <strong>cochinillo asado</strong>{' '}
          sigue la misma elaboración tradicional, horneado despacio hasta
          conseguir ese punto característico. El{' '}
          <strong>capón relleno</strong> lo preparamos al estilo tradicional,
          con relleno de carne, jamón, ciruelas, pasas, manzana y frutos
          secos, ideal para comidas festivas.
        </p>
        <p>
          No indicamos precios ni pesos fijos porque cada encargo se ajusta a
          lo que necesites: coméntanoslo por teléfono y te informamos con
          detalle.
        </p>

        <section className="localPage__info">
          <h2>Cómo encargar</h2>
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
            <a className="btn btn--primary" href="tel:+34916716618">Consultar por teléfono</a>
            <a className="btn" href="/productos#encargos">Ver la carta completa</a>
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
            <li><a href="/paellas-san-fernando-de-henares">Paellas y arroces</a></li>
            <li><a href="/catering">Catering para eventos y celebraciones</a></li>
            <li><a href="/ofertas">Menú del día y ofertas</a></li>
          </ul>
        </nav>
      </div>
    </main>
  )
}
