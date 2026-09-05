import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../components/about.css'
import Seo from '../components/Seo'
import { TELEFONO, TELEFONO_TEL, HORARIO, DIRECCION, MAPS_URL } from '../data/negocio'

import about1 from '../assets/about/kiloycuartold.webp'
import about2 from '../assets/about/fruteria.webp'
import about3 from '../assets/about/cocina.webp'

const SECCIONES = [
  {
    eyebrow: 'Nuestros comienzos',
    title: 'Cocinando para ti desde 1994',
    parrafos: [
      'Empezamos en 1994 como un pequeño obrador familiar con una idea sencilla: cocinar como en casa para todo el barrio. Tres décadas después seguimos fieles a la misma filosofía: recetas de siempre, tiempos de cocción respetados y una atención casi artesanal al detalle.',
      'No trabajamos con atajos ni con bases industriales; preferimos el sofrito a fuego lento, los caldos que se miman durante horas y ese punto de sazón que se consigue probando, ajustando y volviendo a probar.',
    ],
    img: about1,
    imgAlt: 'Los inicios de Kilo y Cuarto en los años noventa',
    bg: '#fef9ec',
    dark: false,
  },
  {
    eyebrow: 'El producto',
    title: 'Producto local y de temporada',
    parrafos: [
      'Creemos que el sabor empieza mucho antes de entrar en la cocina. Por eso trabajamos con proveedores cercanos y producto de temporada: verduras que llegan a diario, carnes seleccionadas y pescados en su mejor momento.',
      'Esto nos permite ajustar los menús según el calendario y mantener la calidad sin disparar el precio. Cuando un ingrediente está en su punto, se nota en el plato: colores vivos, texturas naturales y un aroma que no necesita disfrazarse.',
    ],
    img: about2,
    imgAlt: 'Verduras y producto fresco de proveedores cercanos',
    bg: '#263d4b',
    dark: true,
    reversed: true,
  },
  {
    eyebrow: 'Nuestra manera de atender',
    title: 'Nuestra cocina, tu casa',
    parrafos: [
      'Queremos que comer con nosotros sea tan fácil como comer en familia. Te ayudamos a elegir raciones y guarniciones, te indicamos alérgenos, adaptamos la receta cuando es posible y te damos trucos para calentar en casa sin que el plato pierda jugosidad.',
      'Si vienes con prisa, lo dejamos listo para llevar; si vienes con tiempo, te contamos qué está entrando por temporada. Al final, nuestro trabajo va de lo mismo de siempre: cocinar con cariño para que tú solo tengas que sentarte y disfrutar.',
    ],
    img: about3,
    imgAlt: 'Cocina actual de Kilo y Cuarto',
    bg: '#fff',
    dark: false,
  },
]

const VALORES = [
  { dato: 'Desde 1994', texto: 'Tres décadas cocinando en el mismo barrio.' },
  { dato: 'Cada mañana', texto: 'Todo se elabora el mismo día, sin bases industriales.' },
  { dato: 'De cercanía', texto: 'Proveedores próximos y producto de temporada.' },
  { dato: 'Todos los días', texto: `Abrimos ${HORARIO}.` },
]

export default function About() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000, easing: 'ease-out' })
  }, [])

  return (
    <main className="about">
      <Seo
        title="Sobre nosotros · Cocina casera desde 1994 | Kilo y Cuarto"
        description="Desde 1994 cocinamos como en casa en San Fernando de Henares (Madrid): producto local de temporada, recetas de siempre y comida para llevar hecha con cariño."
        path="/about"
      />

      <header className="about__hero">
        <p className="about__eyebrow">Kilo y Cuarto</p>
        <h1>Cocina de casa en San Fernando de Henares desde 1994</h1>
        <p className="about__heroTexto">
          Somos un negocio familiar. Lo que sale de nuestra cocina es lo mismo
          que comeríamos nosotros: recetas de siempre, producto de cerca y
          tiempo, mucho tiempo.
        </p>
      </header>

      {/* Cifras y señas de identidad */}
      <section className="about__valores" aria-label="Nuestras señas de identidad">
        <ul className="about__valoresGrid">
          {VALORES.map(({ dato, texto }) => (
            <li key={dato}>
              <span className="about__valorDato">{dato}</span>
              <span className="about__valorTexto">{texto}</span>
            </li>
          ))}
        </ul>
      </section>

      {SECCIONES.map((s, i) => (
        <section
          key={s.title}
          className={`about__section ${s.reversed ? 'is-reversed' : ''} ${s.dark ? 'is-dark' : ''}`}
          style={{ '--about-bg': s.bg }}
        >
          <div className="about__inner">
            <div className="about__media" data-aos={s.reversed ? 'fade-left' : 'fade-right'}>
              <img
                src={s.img}
                alt={s.imgAlt}
                width="1200"
                height="800"
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding="async"
              />
            </div>

            <div className="about__copy" data-aos={s.reversed ? 'fade-right' : 'fade-left'}>
              <div className="about__copyInner">
                <p className="about__eyebrow about__eyebrow--seccion">{s.eyebrow}</p>
                <h2>{s.title}</h2>
                {s.parrafos.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Cierre: qué hacer ahora */}
      <section className="about__cierre">
        <div className="about__cierreInner">
          <p className="about__eyebrow">Te esperamos</p>
          <h2>Pásate a probarlo</h2>
          <p>
            Estamos en {DIRECCION}, abiertos {HORARIO}. Si tienes cualquier
            duda o quieres encargar algo, llámanos: te atendemos encantados.
          </p>
          <div className="about__cierreActions">
            <a className="btn btn--primary" href="/productos">Ver la carta</a>
            <a className="btn" href={`tel:${TELEFONO_TEL}`}>Llamar al {TELEFONO}</a>
            <a className="btn" href={MAPS_URL} target="_blank" rel="noreferrer">Cómo llegar</a>
          </div>
        </div>
      </section>
    </main>
  )
}
