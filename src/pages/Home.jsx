import '../components/home.css'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import AOS from 'aos'
import Hero from '../components/Hero'
import Seo from '../components/Seo'
import MapEmbed from '../components/MapEmbed'
import ReviewsCarousel from '../components/ReviewsCarousel'

// Imágenes de contenido en varios tamaños (srcset): móvil descarga versiones ligeras
import imagen1Set from '../assets/imagen1.webp?w=550;800;1024&format=webp&quality=80&as=srcset'
import imagen1Url from '../assets/imagen1.webp?w=1024&format=webp&quality=80&as=url'
import imagen2Set from '../assets/cocinera.webp?w=600;900;1100&format=webp&quality=80&as=srcset'
import imagen2Url from '../assets/cocinera.webp?w=1100&format=webp&quality=80&as=url'
import imagen3Set from '../assets/pulpoygambones.webp?w=550;800;1100&format=webp&quality=80&as=srcset'
import imagen3Url from '../assets/pulpoygambones.webp?w=1100&format=webp&quality=80&as=url'
import imagen4Set from '../assets/verdur.webp?w=600;900;1100&format=webp&quality=80&as=srcset'
import imagen4Url from '../assets/verdur.webp?w=1100&format=webp&quality=80&as=url'
import imagen5Set from '../assets/Croquetas-mix.webp?w=450;700;900&format=webp&quality=80&as=srcset'
import imagen5Url from '../assets/Croquetas-mix.webp?w=900&format=webp&quality=80&as=url'
import imagen6Set from '../assets/arroz negro.webp?w=450;700;900&format=webp&quality=80&as=srcset'
import imagen6Url from '../assets/arroz negro.webp?w=900&format=webp&quality=80&as=url'
import imagen7Set from '../assets/paletilla-cochinillo.webp?w=450;700;900&format=webp&quality=80&as=srcset'
import imagen7Url from '../assets/paletilla-cochinillo.webp?w=900&format=webp&quality=80&as=url'


export default function Home() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1800, easing: 'ease-out' })
  }, [])

  return (
    <main className="home">
      <Seo
        title="Kilo y Cuarto · Pollo asado y paellas para llevar en Madrid"
        description="Comida casera para llevar en San Fernando de Henares (Madrid): pollo asado, paellas y arroces, croquetas, tortillas y asados por encargo. Desde 1994. Haz tu pedido."
        path="/"
      />
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
            <img src={imagen1Url} srcSet={imagen1Set} sizes="(max-width: 900px) 90vw, 550px" alt="Croquetas de cocido" width="1024" height="683" loading="lazy" decoding="async" data-aos="fade-up" data-aos-delay="100" />
            <img src={imagen3Url} srcSet={imagen3Set} sizes="(max-width: 900px) 90vw, 550px" alt="Paella de pulpo y gambones" width="1100" height="1100" loading="lazy" decoding="async" data-aos="fade-up" data-aos-delay="200" />
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
              <img src={imagen5Url} srcSet={imagen5Set} sizes="(max-width: 900px) 90vw, 450px" alt="Croquetas caseras" loading="lazy" decoding="async" />
            </div>
            <div className="topSales__content">
              <h3>Croquetas caseras</h3>
              <p>Cremosas por dentro, doradas por fuera y con ese sabor que siempre apetece repetir.</p>
            </div>
          </article>

          <article className="topSales__card" data-aos="fade-up" data-aos-delay="250">
            <div className="topSales__imageWrap">
              <img src={imagen6Url} srcSet={imagen6Set} sizes="(max-width: 900px) 90vw, 450px" alt="Arroces y paellas" loading="lazy" decoding="async" />
            </div>
            <div className="topSales__content">
              <h3>Arroces y paellas</h3>
              <p>Recetas generosas, sabrosas y perfectas para compartir en casa o en celebraciones.</p>
            </div>
          </article>

          <article className="topSales__card" data-aos="fade-up" data-aos-delay="400">
            <div className="topSales__imageWrap">
              <img src={imagen7Url} srcSet={imagen7Set} sizes="(max-width: 900px) 90vw, 450px" alt="Asados y cocina tradicional" loading="lazy" decoding="async" />
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
            <img src={imagen2Url} srcSet={imagen2Set} sizes="(max-width: 900px) 90vw, 560px" alt="Platos elaborados con producto de calidad" width="1100" height="733" loading="lazy" decoding="async" />
            <p className="empellon__caption">Elaboramos nuestros platos con <br></br>materias primas seleccionadas de la más alta calidad.</p>
          </div>

          <div className="empellon__card" data-aos="fade-up" data-aos-delay="200">
            <img src={imagen4Url} srcSet={imagen4Set} sizes="(max-width: 900px) 90vw, 560px" alt="Productos de proximidad" width="1100" height="733" loading="lazy" decoding="async" />
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

      {/* Carrusel de reseñas de clientes */}
      <ReviewsCarousel />

      <section className="feature feature--map" id="mapa" data-aos="fade-up" data-aos-duration="1800">
        <MapEmbed title="Ubicación Kilo y Cuarto" />
      </section>
    </main>
  )
}