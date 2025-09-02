import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../components/contact.css'



export default function Contact() {
  const [sent, setSent] = useState(false)

  useEffect(() => {
    AOS.init({ once: true, duration: 1000, easing: 'ease-out' })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    // Aquí iría tu fetch/axios a una API si la añades en el futuro
    form.reset()
    setSent(true)
    // Ocultar aviso a los 5s
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <main className="contact">
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
            <h3>Cómo encontrarnos</h3>
            <ul className="contact__list">
              <li>
                <strong>Dirección:</strong>{' '}
                <a
                  href="https://www.google.com/maps/place/Kilo+y+Cuarto/@40.4288709,-3.5362986,17z"
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
                <strong>Email:</strong>{' '}
                <a href="mailto:encargos@kiloycuarto.es">encargos@kiloycuarto.es</a>
              </li>
              
            </ul>
          </div>

          <div className="contact__card">
            <h3>Horario</h3>
            <p>Lunes a Domingo: 09:30 – 15:30</p>
            <p>¡Abrimos todos los festivos excepto 25 de Diciembre y 1 de Enero!</p>
            <p>(Encargos para eventos bajo pedido)</p>
          </div>
        </aside>

        {/* Columna formulario */}
        <section className="contact__formWrap" data-aos="fade-left">
          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <div className="form__row">
              <div className="form__group">
                <label htmlFor="name">Nombre *</label>
                <input id="name" name="name" type="text" required placeholder="Tu nombre" />
              </div>
              <div className="form__group">
                <label htmlFor="phone">Teléfono</label>
                <input id="phone" name="phone" type="tel" placeholder="Opcional" />
              </div>
            </div>

            <div className="form__group">
              <label htmlFor="email">Email *</label>
              <input id="email" name="email" type="email" required placeholder="tucorreo@ejemplo.com" />
            </div>

            <div className="form__group">
              <label htmlFor="subject">Asunto</label>
              <select id="subject" name="subject" defaultValue="general">
                <option value="general">Consulta general</option>
                <option value="encargos">Encargos / Eventos</option>
                <option value="catering">Catering</option>
                <option value="otros">Otros</option>
              </select>
            </div>

            <div className="form__group">
              <label htmlFor="message">Mensaje *</label>
              <textarea id="message" name="message" rows="6" required placeholder="Cuéntanos en qué podemos ayudarte…" />
            </div>

            <div className="form__legal">
              <label className="checkbox">
                <input type="checkbox" required /> Acepto la{' '}
                <Link to="/privacidad" className="link">Política de Privacidad</Link>.
              </label>
            </div>

            <div className="form__actions">
              <button type="submit" className="btn btn--primary">Enviar mensaje</button>
              {sent && (
                <span className="form__status" role="status" aria-live="polite">
                  ¡Gracias! Hemos recibido tu mensaje.
                </span>
              )}
            </div>
          </form>
        </section>
      </section>

      {/* Mapa embebido */}
      <section className="contact__map" data-aos="fade-up">
        <div className="map__container">
          <iframe
            title="Ubicación Kilo y Cuarto"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.697885885374!2d-3.5362986!3d40.4288709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42308f645812db%3A0x7daded5415031301!2sKilo%20y%20Cuarto!5e0!3m2!1ses!2ses!4v1698916484247!5m2!1ses!2ses"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen=""
          ></iframe>
        </div>
      </section>
    </main>
  )
}
