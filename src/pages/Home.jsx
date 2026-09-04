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
import cateringPortada from '../assets/catering/pagina-1.webp'


export default function Home() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1800, easing: 'ease-out' })
  }, [])

  return (
    <main className="home">
      <Seo
        title="Comida para llevar en San Fernando de Henares | Kilo y Cuarto"
        description="Comida casera para llevar en San Fernando de Henares: pollo asado, paellas, menú del día y asados por encargo. Abiertos de lunes a domingo."
        path="/"
      />
      <Hero />

      {/* Franja de información local: qué somos, dónde estamos y cómo pedir */}
      <section className="homeIntro" data-aos="fade-up">
        <div className="homeIntro__inner">
          <p className="homeIntro__eyebrow">Kilo y Cuarto</p>
          <h2>Comida casera para llevar, aquí al lado</h2>
          <p className="homeIntro__text">
            Somos un negocio familiar de comida casera para llevar en San
            Fernando de Henares: pollos asados, paellas y arroces, menú del
            día y asados por encargo, elaborados cada mañana. Cocinando para
            el barrio desde 1994.
          </p>

          <ul className="homeIntro__nap">
            <li className="homeIntro__napFull">
              <strong>Dónde:</strong>{' '}
              <a
                href="https://www.google.com/maps/place/Kilo+y+Cuarto/@40.4288709,-3.5362986,758m/data=!3m1!1e3!4m6!3m5!1s0xd42308f645812db:0x7daded5415031301!8m2!3d40.4288668!4d-3.5337237!16s%2Fg%2F1hhvx128l?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
              >
                Calle Toledo 2, San Fernando de Henares (Madrid)
              </a>
            </li>
            <li>
              <strong>Horario:</strong> lunes a domingo, de 09:30 a 15:30
            </li>
            <li>
              <strong>Teléfono:</strong> <a href="tel:+34916716618">91 671 66 18</a>
            </li>
          </ul>

          <div className="homeIntro__actions">
            <a className="btn btn--primary" href="/productos">Ver la carta</a>
            <a className="btn" href="tel:+34916716618">Llamar o encargar</a>
            <a
              className="btn"
              href="https://www.google.com/maps?ll=40.428867,-3.533724&z=17&t=m&hl=es&gl=ES&mapclient=embed&cid=9056155371097494273"
              target="_blank"
              rel="noreferrer"
            >
              Cómo llegar
            </a>
          </div>

          <nav className="homeIntro__links" aria-label="Nuestras especialidades">
            <a href="/pollo-asado-san-fernando-de-henares">Pollos asados en San Fernando de Henares</a>
            <a href="/paellas-san-fernando-de-henares">Paellas y arroces para llevar</a>
            <a href="/ofertas">Consulta el menú del día</a>
            <a href="/asados-por-encargo">Asados por encargo</a>
          </nav>

          <p className="homeIntro__coslada">
            ¿Vives en Coslada? Estamos a escasos metros del límite entre los dos
            municipios:{' '}
            <a href="/comida-para-llevar-coslada">
              comida casera para llevar en la zona de Coslada
            </a>
            .
          </p>
        </div>
      </section>

      {/* Sección estilo Zizzi con AOS */}
      <section className="feature feature--zizzi" data-aos="fade-up" data-aos-delay="100">
        <div className="feature__zizzi-container">
          <div className="feature__zizzi-text" data-aos="fade-up" data-aos-delay="200">
            <h2>Cocinamos como tu abuela</h2>
            <p>
              Desde 1994 compartimos mesa contigo con la misma ilusión de siempre. Cada plato que servimos está elaborado con el cariño y la dedicación de una comida hecha en casa.<br />
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

      {/* Catering: acceso al catálogo en PDF */}
      <section className="homeCatering" data-aos="fade-up">
        <div className="homeCatering__inner">
          <div className="homeCatering__texto">
            <p className="homeCatering__eyebrow">Catering y eventos</p>
            <h2>¿Organizas una celebración?</h2>
            <p>
              Tenemos un catálogo con empanadas, fritos y finger food pensados
              para reuniones, comuniones, cumpleaños y eventos de empresa.
              Puedes consultarlo online o descargarlo en PDF.
            </p>
            <div className="homeCatering__actions">
              <a className="btn btn--primary" href="/catering">Ver el catálogo</a>
              <a
                className="btn btn--ghost-light"
                href="/catering-2026-precios.pdf"
                download
              >
                Descargar en PDF
              </a>
            </div>
          </div>

          <a className="homeCatering__portada" href="/catering" aria-label="Ver el catálogo de catering">
            <img
              src={cateringPortada}
              alt="Portada del catálogo de catering 2026 de Kilo y Cuarto"
              width="1400"
              height="1980"
              loading="lazy"
              decoding="async"
            />
          </a>
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