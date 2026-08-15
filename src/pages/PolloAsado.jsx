import Seo from '../components/Seo'
import Breadcrumbs from '../components/Breadcrumbs'
import '../components/localpage.css'

import polloAsadoGif from '../assets/pollo-asado.gif'
import pollosEstrellas from '../assets/ofertas/pollos-y-estrellas.webp'

const BREADCRUMB_ITEMS = [
  { label: 'Inicio', to: '/' },
  { label: 'Pollo asado', to: '/pollo-asado-san-fernando-de-henares' },
]

export default function PolloAsado() {
  return (
    <main className="localPage">
      <Seo
        title="Pollo asado en San Fernando de Henares | Kilo y Cuarto"
        description="Pollo asado casero para llevar en San Fernando de Henares: piel crujiente, carne jugosa y patatas panadera. Recógelo en Calle Toledo 2 o pide por teléfono."
        path="/pollo-asado-san-fernando-de-henares"
      />

      <Breadcrumbs items={BREADCRUMB_ITEMS} />

      <header className="localPage__hero">
        <p className="localPage__eyebrow">Kilo y Cuarto</p>
        <h1>Pollo asado en San Fernando de Henares</h1>
        <p className="localPage__intro">
          Pollos asados lentamente cada día, con nuestra mezcla de especias de
          la casa y el jugo que llevamos preparando desde 1994. Listos para
          recoger en Calle Toledo 2.
        </p>
      </header>

      <div className="localPage__body">
        <h2>Un pollo asado como el de casa</h2>
        <p>
          Cocinamos el pollo despacio, a fuego controlado, hasta conseguir una
          piel dorada y crujiente por fuera y una carne jugosa por dentro. Lo
          acompañamos con nuestras patatas panadera y el jugo especial que
          elaboramos con la receta de siempre. Es uno de los platos por los
          que más nos conocen en el barrio, y también uno de los que más
          encargos recibe para comidas familiares y reuniones de fin de
          semana.
        </p>

        <figure className="localPage__figure localPage__figure--gif">
          <img
            src={polloAsadoGif}
            alt="Pollo asado girando en el horno de Kilo y Cuarto"
            width="320"
            height="180"
            loading="lazy"
            decoding="async"
          />
        </figure>

        <h2>Complementos y ofertas</h2>
        <p>
          Además del pollo solo, tenemos ofertas con complementos (patatas,
          ensaladilla, aros de cebolla y más) pensadas para compartir. Puedes
          consultar la oferta vigente en nuestra página de{' '}
          <a href="/ofertas">ofertas y menú del día</a>.
        </p>

        <figure className="localPage__figure">
          <img
            src={pollosEstrellas}
            alt="Oferta de pollo asado con complementos de Kilo y Cuarto"
            width="1179"
            height="660"
            loading="lazy"
            decoding="async"
          />
        </figure>

        <h2>Cómo recoger tu pedido</h2>
        <p>
          Puedes llamarnos con antelación para reservar tu pollo asado y
          recogerlo cuando te venga bien dentro de nuestro horario, o pasarte
          directamente por el local en Calle Toledo 2. En días de mucha
          demanda (fines de semana y festivos) recomendamos encargar con
          tiempo para asegurar la hora de recogida.
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
            <a className="btn btn--primary" href="tel:+34916716618">Llamar y encargar</a>
            <a className="btn" href="/productos">Ver la carta completa</a>
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
            <li><a href="/paellas-san-fernando-de-henares">Paellas y arroces para llevar</a></li>
            <li><a href="/asados-por-encargo">Asados por encargo</a></li>
            <li><a href="/ofertas">Menú del día y ofertas</a></li>
          </ul>
        </nav>
      </div>
    </main>
  )
}
