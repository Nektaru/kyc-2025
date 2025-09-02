import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../components/about.css'

import about1 from '../assets/about/kiloycuartold.webp'
import about2 from '../assets/about/fruteria.webp'
import about3 from '../assets/about/cocina.webp'

export default function About() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000, easing: 'ease-out' })
  }, [])

  const sections = [
    {
      title: 'Cocinando para ti desde 1994',
      text:
        'Empezamos en 1994 como un pequeño obrador familiar con una idea sencilla: cocinar como en casa para todo el barrio. Tres décadas después seguimos fieles a la misma filosofía: recetas de siempre, tiempos de cocción respetados y una atención casi artesanal al detalle. No trabajamos con atajos ni con bases industriales; preferimos el sofrito a fuego lento, los caldos que se miman durante horas y ese punto de sazón que se consigue probando, ajustando y volviendo a probar. Cada día abrimos la puerta con la misma ilusión de entonces: que te lleves un plato honesto, abundante y sabroso, listo para disfrutar en tu mesa.',
      img: about1,
      imgAlt: 'Equipo en 1994',
      bg: '#FEF9EC',
      dark: false,
      // Si quieres esta sección más contenida, descomenta:
      // compact: true,
    },
    {
      title: 'Producto local y de temporada',
      text:
        'Creemos que el sabor empieza mucho antes de entrar en la cocina. Por eso trabajamos con proveedores cercanos y producto de temporada: verduras que llegan a diario, carnes seleccionadas y pescados en su mejor momento. Apostamos por una cadena corta y transparente, que reduce desperdicio y garantiza frescura. Esto nos permite ajustar los menús según el calendario, aprovechar lo que la tierra ofrece y mantener la calidad sin disparar el precio. Cuando un ingrediente está en su punto, se nota en el plato: colores vivos, texturas naturales y un aroma que no necesita disfrazarse.',
      img: about2,
      imgAlt: 'Ingredientes frescos de cercanía',
      bg: '#263D4B',
      dark: true,
      reversed: true,
      // compact: true,
    },
    {
      title: 'Nuestra cocina, tu casa',
      text:
        'Queremos que comer con nosotros sea tan fácil como comer en familia. Por eso te ayudamos a elegir raciones y guarniciones, te indicamos alérgenos, adaptamos la receta cuando es posible y te damos trucos para calentar en casa sin que el plato pierda jugosidad. Si prefieres algo más ligero o tienes antojo de “cucharón”, también te orientamos. Y si vienes con prisa, lo dejamos listo para llevar; si vienes con tiempo, te contamos qué está entrando por temporada. Al final, nuestro trabajo va de lo mismo de siempre: cocinar con cariño para que tú sólo tengas que sentarte y disfrutar.',
      img: about3,
      imgAlt: 'Cocina actual y familiar',
      bg: '#FEF9EC',
      dark: false,
      // compact: true,
    },
  ]

  return (
    <main className="about">
      {sections.map((s, i) => (
        <section
          key={i}
          className={`about__section ${s.reversed ? 'is-reversed' : ''} ${s.dark ? 'is-dark' : ''} ${s.compact ? 'is-compact' : ''}`}
          style={{ '--about-bg': s.bg }}
        >
          <div className="about__inner">
            <div
              className="about__media"
              data-aos={s.reversed ? 'fade-left' : 'fade-right'}
            >
              <img src={s.img} alt={s.imgAlt} />
            </div>

            <div
              className="about__copy"
              data-aos={s.reversed ? 'fade-right' : 'fade-left'}
            >
              <div className="about__copyInner">
                <h2>{s.title}</h2>
                <p>{s.text}</p>
              </div>
            </div>
          </div>
        </section>
      ))}
    </main>
  )
}
