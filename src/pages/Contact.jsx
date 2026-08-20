import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../components/contact.css'
import Seo from '../components/Seo'
import MapEmbed from '../components/MapEmbed'
import { WHATSAPP_URL, WHATSAPP_NUMERO } from '../components/WhatsAppButton'
import { trackEvent } from '../analytics'

export default function Contact() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000, easing: 'ease-out' })
  }, [])

  return (
    <main className="contact">
      <Seo
        title="Contacto y horario | Kilo y Cuarto · San Fernando de Henares"
        description="Dónde estamos, horario y teléfono de Kilo y Cuarto en San Fernando de Henares (Madrid). Haz tu encargo de pollo asado, paellas y comida casera para llevar."
        path="/contacto"
      />

      {/* Cabecera / Intro */}
      <header className="contact__header" data-aos="fade-up">
        <h1>Contacto</h1>
        <p>Cuéntanos qué necesitas y te respondemos lo antes posible.</p>
      </header>

      {/* Grid principal */}
      <section className="contact__grid">
        {/* Columna info */}
        <aside className="contact__info" data-aos="fade-right">
          <div className="contact__card">
            <h3>Dónde encontrarnos</h3>
            <ul className="contact__list">
              <li>
                <strong>Dirección:</strong>{' '}
                <a
                  href="https://www.google.com/maps/place/Kilo+y+Cuarto/@40.4288709,-3.5362986,758m/data=!3m1!1e3!4m6!3m5!1s0xd42308f645812db:0x7daded5415031301!8m2!3d40.4288668!4d-3.5337237!16s%2Fg%2F1hhvx128l?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                >
                  Calle Toledo 2, San Fernando de Henares 28830 (Madrid)
                </a>
              </li>
              <li>
                <strong>Teléfono:</strong>{' '}
                <a href="tel:+34916716618">91 671 66 18</a>
              </li>
              <li>
                <strong>WhatsApp:</strong>{' '}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('click_whatsapp', { origen: 'contacto' })}
                >
                  {WHATSAPP_NUMERO}
                </a>
              </li>
              <li>
                <strong>Email:</strong>{' '}
                <a href="mailto:encargos@kiloycuarto.es">encargos@kiloycuarto.es</a>
              </li>
            </ul>
          </div>

          <div className="contact__card">
            <h3>Junto al límite con Coslada</h3>
            <p>
              Estamos en Calle Toledo 2, en San Fernando de Henares, a escasos
              metros del límite con Coslada. Si vives en Coslada y buscas
              comida casera, pollos asados o paellas para recoger, puedes
              comprobar nuestra ubicación en el mapa de abajo y calcular tu
              ruta.
            </p>
            <p>
              <Link to="/comida-para-llevar-coslada" className="link">
                Comida para llevar cerca de Coslada
              </Link>
            </p>
          </div>

          <div className="contact__card">
            <h3>Horario</h3>
            <p>Lunes a Domingo: 09:30 – 15:30</p>
            <p>¡Abrimos todos los festivos excepto 25 de Diciembre y 1 de Enero!</p>
            <p>(Encargos para eventos bajo pedido)</p>
          </div>
        </aside>

        {/* Columna formulario (Google Form embebido) */}
        <section className="contact__formWrap" data-aos="fade-left">
          <div className="contact__form">
            <div className="form__head">
              <h3 className="form__title">Escríbenos</h3>
              <p className="form__subtitle">
                Rellena el formulario y te responderemos lo antes posible.
              </p>
            </div>

            {/* IMPORTANTE:
               1) Abre tu Google Form -> Enviar -> icono "<>" (Insertar HTML)
               2) Copia la URL del "src" y pégala aquí.
               Debe acabar en: /viewform?embedded=true
            */}
            <div className="contact__formIframeWrap" aria-label="Formulario de contacto">
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeqaChGH6Gu-sdLmm94TW4p1Td9GxMWylvfmeLQ9V2I4bCTGw/viewform?embedded=true" 
              width="640" 
              height="1563" 
              frameborder="0" 
              marginheight="0" 
              marginwidth="0">Cargando…</iframe>
            </div>

            {/* Aviso RGPD (nota: lo ideal es que la aceptación sea una pregunta obligatoria DENTRO del Google Form) */}
            <div className="form__legal form__legal--note">
              Al enviar este formulario aceptas la{' '}
              <Link to="/privacidad" className="link">Política de Privacidad</Link>.
            </div>

            {/* Alternativa: abrir el formulario en nueva pestaña (por si algún móvil lo muestra mejor) */}
            <div className="form__actions form__actions--secondary">
              <a
                className="btn btn--ghost"
                href="https://docs.google.com/forms/d/e/1FAIpQLSeqaChGH6Gu-sdLmm94TW4p1Td9GxMWylvfmeLQ9V2I4bCTGw/viewform?usp=dialog"
                target="_blank"
                rel="noreferrer"
              >
                Abrir formulario en otra pestaña
              </a>
            </div>
          </div>
        </section>
      </section>

      {/* Mapa embebido (carga diferida al hacer clic) */}
      <section className="contact__map" data-aos="fade-up">
        <MapEmbed title="Ubicación Kilo y Cuarto" />
      </section>
    </main>
  )
}
