import { useState } from 'react'
import Modal from '../components/Modal'
import Seo from '../components/Seo'
import '../components/ofertas.css'

import pollosEstrellas from '../assets/ofertas/pollos-y-estrellas.webp'
import menuLunes from '../assets/ofertas/menu-lunes.webp'
import menuMartes from '../assets/ofertas/menu-martes.webp'
import menuMiercoles from '../assets/ofertas/menu-miercoles.webp'
import menuJuevesViernes from '../assets/ofertas/menu-juevesviernes.webp'
import paellasKyc from '../assets/ofertas/paellas-kyc.webp'

// Menú según el día de la semana (0=domingo ... 6=sábado)
const MENUS = {
  1: { src: menuLunes, label: 'Menú del lunes' },
  2: { src: menuMartes, label: 'Menú del martes' },
  3: { src: menuMiercoles, label: 'Menú del miércoles' },
  4: { src: menuJuevesViernes, label: 'Menú de jueves y viernes' },
  5: { src: menuJuevesViernes, label: 'Menú de jueves y viernes' },
}

export default function Ofertas() {
  const [modal, setModal] = useState(null) // { src, alt }
  // El día se calcula en el cliente: cada visitante ve el menú que le toca.
  const [day] = useState(() => new Date().getDay())
  const todayMenu = MENUS[day]

  const open = (src, alt) => setModal({ src, alt })

  return (
    <main className="ofertas">
      <Seo
        title="Ofertas y menú del día | Kilo y Cuarto · San Fernando de Henares"
        description="Menú del día de lunes a viernes, ofertas de pollo asado con complementos y paellas para llevar en San Fernando de Henares (Madrid). Consulta el menú de hoy."
        path="/ofertas"
      />

      <header className="ofertas__header">
        <p className="ofertas__eyebrow">Kilo y Cuarto</p>
        {/* El {' '} es necesario: sin él, el texto del H1 se lee "díaen San
            Fernando" al extraerlo (lectores de pantalla y buscadores). */}
        <h1>
          Ofertas y menú del día{' '}
          <br />
          en San Fernando de Henares
        </h1>
        <p className="ofertas__intro">
          Nuestras mejores ofertas de comida casera para llevar: pollo asado con
          complementos, menú del día de lunes a viernes y paellas. Toca cualquier
          imagen para verla más grande.
        </p>
      </header>

      {/* 1) Pollos y complementos */}
      <section className="ofertas__section" aria-labelledby="of-pollos">
        <h2 id="of-pollos">Pollos y complementos</h2>
        <p className="ofertas__text">
          Nuestro famoso pollo asado con sus complementos, la oferta perfecta para
          compartir. Pídelo para llevar en Calle Toledo 2.
        </p>
        <figure className="ofertas__figure">
          <button
            type="button"
            className="ofertas__imgBtn"
            onClick={() => open(pollosEstrellas, 'Oferta de pollos asados y complementos de Kilo y Cuarto')}
            aria-label="Ampliar la oferta de pollos y complementos"
          >
            <img
              src={pollosEstrellas}
              alt="Oferta de pollos asados y complementos de Kilo y Cuarto"
              loading="lazy"
              decoding="async"
              width="1179"
              height="660"
            />
            <span className="ofertas__zoomHint">🔍 Ampliar</span>
          </button>
        </figure>
      </section>

      {/* 2) Menú del día */}
      <section className="ofertas__section ofertas__section--alt" aria-labelledby="of-menu">
        <h2 id="of-menu">Menú del día · de lunes a viernes</h2>
        <p className="ofertas__text">
          De lunes a viernes (no festivos) tenemos menú del día casero y a buen
          precio, para llevar a casa o a la oficina. Cambia cada día según el
          cartel: cada día, su menú.
        </p>

        {todayMenu ? (
          <figure className="ofertas__figure">
            <figcaption className="ofertas__menuLabel">{todayMenu.label}</figcaption>
            <button
              type="button"
              className="ofertas__imgBtn"
              onClick={() => open(todayMenu.src, todayMenu.label + ' de Kilo y Cuarto')}
              aria-label={`Ampliar el ${todayMenu.label}`}
            >
              <img
                src={todayMenu.src}
                alt={todayMenu.label + ' de Kilo y Cuarto'}
                loading="lazy"
                decoding="async"
                width="1920"
                height="1080"
              />
              <span className="ofertas__zoomHint">🔍 Ampliar</span>
            </button>
          </figure>
        ) : (
          <p className="ofertas__weekend">
            Los <strong>sábados y domingos</strong> no ofrecemos menú del día.
            ¡Te esperamos de lunes a viernes de 9:30 a 15:30!
          </p>
        )}
      </section>

      {/* 3) Nuestras paellas */}
      <section className="ofertas__section" aria-labelledby="of-paellas">
        <h2 id="of-paellas">Nuestras paellas</h2>
        <p className="ofertas__text">
          Paellas y arroces caseros por encargo: valenciana, de marisco, arroz
          negro y más. Consulta el cartel y haz tu pedido en el{' '}
          <a href="tel:+34916716618">91 671 66 18</a>. Descubre{' '}
          <a href="/paellas-san-fernando-de-henares">todas nuestras variedades de paella y arroz</a>,
          con tamaños y precios. Si vienes desde Coslada, aquí tienes la{' '}
          <a href="/paellas-coslada">información de recogida para tu zona</a>.
        </p>
        <figure className="ofertas__figure">
          <button
            type="button"
            className="ofertas__imgBtn"
            onClick={() => open(paellasKyc, 'Cartel de paellas de Kilo y Cuarto: valenciana, marisco y arroz negro')}
            aria-label="Ampliar el cartel de nuestras paellas"
          >
            <img
              src={paellasKyc}
              alt="Cartel de paellas de Kilo y Cuarto: valenciana, marisco y arroz negro"
              loading="lazy"
              decoding="async"
              width="1920"
              height="1080"
            />
            <span className="ofertas__zoomHint">🔍 Ampliar</span>
          </button>
        </figure>
      </section>

      <Modal isOpen={!!modal} onClose={() => setModal(null)}>
        {modal && (
          <img className="ofertas__modalImg" src={modal.src} alt={modal.alt} />
        )}
      </Modal>
    </main>
  )
}
