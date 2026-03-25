import '../components/home.css'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import AOS from 'aos'
import Hero from '../components/Hero'

import imagen1 from '../assets/imagen1.webp'
import imagen2 from '../assets/cocinera.webp'
import imagen3 from '../assets/pulpoygambones.webp'
import imagen4 from '../assets/verdur.webp'
import imagen5 from '../assets/Croquetas-mix.webp'
import imagen6 from '../assets/arroz negro.webp'
import imagen7 from '../assets/paletilla-cochinillo.webp'


export default function Home() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1800, easing: 'ease-out' })
  }, [])

  return (
    <main className="home">
      <Hero />

      {/* Sección estilo Zizzi con AOS */}
      <section className="feature feature--zizzi" data-aos="fade-up" data-aos-delay="100">
        <div className="feature__zizzi-container">
          <div className="feature__zizzi-text" data-aos="fade-up" data-aos-delay="200">
            <h2>Cocinamos como tu abuela</h2>
            <p>
              Desde hace 31 años compartimos mesa contigo con la misma ilusión de siempre. Cada plato que servimos está elaborado con el cariño y la dedicación de una comida hecha en casa.<br />
              <br />
              Sabores auténticos, producto fresco y mucho por disfrutar.
            </p>
            <a className="btn btn--primary btn--small" href="/productos">Ver carta</a>
          </div>
          <div className="feature__zizzi-images">
            <img src={imagen1} alt="Croquetas de cocido" data-aos="fade-up" data-aos-delay="100" />
            <img src={imagen3} alt="Paella de pulpo y gambones" data-aos="fade-up" data-aos-delay="200" />
          </div>
        </div>
      </section>

      {/* Nueva sección: top ventas */}
      <section id="topVentas" className="topSales" data-aos="fade-up">
        <div className="topSales__header">
          <p className="topSales__eyebrow">Los favoritos de nuestros clientes</p>
          <h2>Lo más pedido en Kilo y Cuarto</h2>
          <p>
            Una selección de algunos de los platos que más triunfan cada semana. Si vienes por
            primera vez, empieza por aquí.
          </p>
        </div>

        <div className="topSales__grid">
          <article className="topSales__card" data-aos="fade-up" data-aos-delay="100">
            <div className="topSales__imageWrap">
              <img src={imagen5} alt="Croquetas caseras" />
            </div>
            <div className="topSales__content">
              <h3>Croquetas caseras</h3>
              <p>Cremosas por dentro, doradas por fuera y con ese sabor que siempre apetece repetir.</p>
            </div>
          </article>

          <article className="topSales__card" data-aos="fade-up" data-aos-delay="250">
            <div className="topSales__imageWrap">
              <img src={imagen6} alt="Arroces y paellas" />
            </div>
            <div className="topSales__content">
              <h3>Arroces y paellas</h3>
              <p>Recetas generosas, sabrosas y perfectas para compartir en casa o en celebraciones.</p>
            </div>
          </article>

          <article className="topSales__card" data-aos="fade-up" data-aos-delay="400">
            <div className="topSales__imageWrap">
              <img src={imagen7} alt="Asados y cocina tradicional" />
            </div>
            <div className="topSales__content">
              <h3>Asados y cocina tradicional</h3>
              <p>Platos hechos con tiempo, materia prima seleccionada y el punto casero de siempre.</p>
            </div>
          </article>
        </div>
      </section>

      {/* Sección estilo Empellón igual que antes */}
      <section className="feature feature--empellon" data-aos="fade-up" data-aos-delay="600">
        <div className="empellon__cards">
          <div className="empellon__card" data-aos="fade-up" data-aos-delay="100">
            <img src={imagen2} alt="Platos elaborados con producto de calidad" />
            <p className="empellon__caption">Elaboramos nuestros platos con <br></br>materias primas seleccionadas de la más alta calidad.</p>
          </div>

          <div className="empellon__card" data-aos="fade-up" data-aos-delay="200">
            <img src={imagen4} alt="Productos de proximidad" />
            <p className="empellon__caption">Priorizamos los productos de proximidad,<br></br> por lo que apoyamos siempre el comercio local. </p>
          </div>
        </div>
      </section>

      {/* Nueva franja CTA */}
      <section className="homeCtaBand" data-aos="fade-up">
        <div className="homeCtaBand__inner">
          <div className="homeCtaBand__text">
            <p className="homeCtaBand__eyebrow">¿No sabes qué elegir?</p>
            <h2>Descubre nuestra carta y encuentra tu próximo plato favorito</h2>
          </div>

          <div className="homeCtaBand__actions">
            <a className="btn btn--primary" href="/productos">Ver productos</a>
            <a className="btn btn--ghost-light" href="#mapa">Ven a visitarnos</a>
          </div>
        </div>
      </section>

      <section className="feature feature--map" id="mapa" data-aos="fade-up" data-aos-duration="1800">
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