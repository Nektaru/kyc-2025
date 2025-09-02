import '../components/home.css'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import AOS from 'aos'
import Hero from '../components/Hero'


import imagen1 from '../assets/imagen1.webp'
import imagen2 from '../assets/imagen2.webp'
import imagen3 from '../assets/imagen3.webp'
import imagen4 from '../assets/verduras-prox.webp'

export default function Home() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1800, easing: 'ease-out' })
  }, [])

  return (
    <main className="home">
      <Hero />  {/* ⬅️ Aquí lo insertas */}


      {/* Sección estilo Zizzi con AOS */}
      <section className="feature feature--zizzi" data-aos="fade-up" data-aos-delay="400">
        <div className="feature__zizzi-container">
          <div className="feature__zizzi-text" data-aos="fade-up" data-aos-delay="600">
            <h2>Cocinamos como tu abuela</h2>
            <p>
              Desde hace 31 años compartimos mesa contigo con la misma ilusión de siempre. Cada plato que servimos está elaborado con el cariño y la dedicación de una comida hecha en casa.<br />
              <br />
              Sabores auténticos, producto fresco y mucho por disfrutar.
            </p>
            <a className="btn btn--primary btn--small" href="/productos">Ver carta</a>
          </div>
          <div className="feature__zizzi-images">
            <img src={imagen1} alt="Croquetas de cocido" data-aos="fade-up" data-aos-delay="8000" />
            <img src={imagen3} alt="Paella de pulpo y gambones" data-aos="fade-up" data-aos-delay="1000" />
          </div>
        </div>
      </section>

      {/* Sección estilo Empellón igual que antes */}
      <section className="feature feature--empellon" data-aos="fade-up" data-aos-delay="600">
        <div className="empellon__cards">
          <div className="empellon__card" data-aos="fade-up" data-aos-delay="900">
              <img src={imagen2} alt="Mira nuestras ofertas" />
              <p className="empellon__caption">Elaboramos nuestros platos con <br></br>materias primas seleccionadas de la más alta calidad.</p>
          </div>

          <div className="empellon__card" data-aos="fade-up" data-aos-delay="1200">
              <img src={imagen4} alt="Ven a visitarnos" />
              <p className="empellon__caption">Priorizamos los productos de proximidad,<br></br> por lo que apoyamos siempre el comercio local. </p> 
          </div>
        </div>
      </section>

      <section className="feature feature--map" data-aos="fade-up" data-aos-duration="1800">
        <div className="map__container">
          <iframe
            title="Ubicación Kilo y Cuarto"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.697885885374!2d-3.5362986!3d40.4288709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42308f645812db%3A0x7daded5415031301!2sKilo%20y%20Cuarto!5e0!3m2!1ses!2ses!4v1698916484247!5m2!1ses!2ses"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>
  )
}
