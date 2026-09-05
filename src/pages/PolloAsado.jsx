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
        {/* El {' '} es necesario: sin él, el texto del H1 se lee "asadoen San
            Fernando" al extraerlo (lectores de pantalla y buscadores). */}
        <h1>
          Pollo asado{' '}
          <br />
          en San Fernando de Henares
        </h1>
        <p className="localPage__intro">
          Pollos asados lentamente cada día, con nuestra mezcla de especias de
          la casa y el jugo que llevamos preparando desde 1994.
        </p>
        <p className="localPage__introSub">
          Listos para recoger en Calle Toledo 2, frente al parque primero de Mayo.
        </p>
      </header>

      <div className="localPage__body">
        <h2>Un pollo asado como el de toda la vida</h2>
        <p>
          Asamos el pollo lentamente en nuestro asador, a fuego controlado,
          hasta conseguir una piel dorada y crujiente por fuera y una carne
          jugosa por dentro. Lo acompañamos con nuestra salsa especial que
          elaboramos con la receta de siempre, ¡y que es un vicio para mojar
          pan! Mantenemos la receta desde 1994 y somos famosos en el barrio
          por tener el mejor pollo de la zona. Y lo mejor es, ¡que no hace
          falta encargarlos! Te aseguramos pollos recién asados todos los
          días de 11:00 que sale la primera barra hasta las 15:00 que
          empezamos a limpiar el asador. Perfecto para comidas familiares y
          reuniones de fin de semana.
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
          ensaladilla, croquetas y más) pensadas para compartir. Puedes
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

        <h2>Ven a por tu pollo y olvídate de cocinar</h2>
        <p>
          ¡Puedes venir a por tu pollo sin necesidad de reservarlo! Sólo
          recomendamos llamar para reservarlo si vas a venir más tarde de las
          15:00 (cerramos a las 15:30) y es la única franja horaria que no
          aseguramos 100% tener pollos. En días de mucha demanda (fines de
          semana y festivos) verás que se forman grandes filas fuera de la
          tienda, pero no te preocupes que tenemos pollos y patatas para
          todos.
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
