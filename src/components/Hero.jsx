import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './hero.css'

// Imágenes adaptables: cada slide en varios anchos; el navegador elige el
// óptimo según la pantalla (srcset). Móvil descarga una versión mucho más ligera.
import pollo2Set from '../assets/pollo2.webp?w=768;1200;1500&format=webp&quality=86&as=srcset'
import pollo2Url from '../assets/pollo2.webp?w=1200&format=webp&quality=86&as=url'
import slide2Set from '../assets/local-2026.webp?w=768;1280;1920&format=webp&quality=80&as=srcset'
import slide2Url from '../assets/local-2026.webp?w=1280&format=webp&quality=80&as=url'
import cateringSet from '../assets/catering.webp?w=768;1078&format=webp&quality=80&as=srcset'
import cateringUrl from '../assets/catering.webp?w=1078&format=webp&quality=80&as=url'

/**
 * Consejo de assets:
 * - Usa imágenes horizontales (16:9 aprox.) 1600×900 o 1920×1000 .webp (150–300 KB).
 * - Si alguna necesita otro encuadre, ajusta 'pos' (object-position) por slide.
 * - 'size' opcional: 'sm' | 'md' | 'lg' para variar el tamaño de tipografías por slide.
 */
const slides = [
  {
  src: pollo2Url,
  srcSet: pollo2Set,
  alt: 'Pollo asado casero de Kilo y Cuarto en San Fernando de Henares',
  h1: 'Comida casera para llevar en San Fernando de Henares',
  p: 'Pollos asados, paellas, menú del día y platos caseros elaborados cada mañana. Cocinando para San Fernando de Henares desde 1994.',
  pos: 'center center',
  size: 'lg',
  ctas: [
    {
      label: 'Nuestras ofertas',
      to: '/ofertas',
      variant: 'primary',
      internal: true
    },
    {
      label: 'Cómo llegar',
      to: 'https://www.google.com/maps?ll=40.428867,-3.533724&z=17&t=m&hl=es&gl=ES&mapclient=embed&cid=9056155371097494273',
      variant: 'ghost',
      newTab: true
    }
  ]
}
,
  {
    src: slide2Url,
    srcSet: slide2Set,
    alt: 'El local de Kilo y Cuarto en San Fernando de Henares',
    h1:  'Cocinando para ti desde 1994',
    p:   'Como si fuésemos tu propia abuela',
    pos: 'center 40%',
    size: 'md',
    ctas: [
      { label: 'Ver nuestros productos', to: '/productos', variant: 'primary', internal: true },
      { label: 'Pide a Domicilio',          to: 'https://www.ubereats.com/es/store/kilo-y-cuarto/DH_BPz1gUQ6sTB14ELMrpQ?srsltid=AfmBOoroF3nh08S3m2e9PvCfh5nhTAFh-uIUpbmLgbP2D4hdn9sjvuRt', variant: 'ghost', newTab: true },
    ]
  },
  {
    src: cateringUrl,
    srcSet: cateringSet,
    alt: 'Caterings y eventos',
    h1:  'Caterings y eventos',
    p:   'Cuénta con nosotros para tus momentos más especiales',
    pos: 'center center',
    size: 'md',
    ctas: [
      { label: 'Pedir presupuesto', to: '/contacto?tipo=catering', variant: 'primary', internal: true },
      { label: 'Llamar',            to: 'tel:+34916716618',        variant: 'ghost' },
    ]
  },
]

export default function Hero() {
  const [idx, setIdx] = useState(0)

  // El timer se reinicia cada vez que cambia el slide (automática o
  // manualmente), porque el efecto depende de `idx`.
  useEffect(() => {
    const id = window.setTimeout(
      () => setIdx((i) => (i + 1) % slides.length),
      8000
    )
    return () => window.clearTimeout(id)
  }, [idx])

  const goTo = (i) => setIdx((i + slides.length) % slides.length)
  const next = () => goTo(idx + 1)
  const prev = () => goTo(idx - 1)


  // Renderiza CTA como <Link> interno o <a> externo (tel, WhatsApp, etc.)
  const renderCTA = (cta, i) => {
    const classes = `btn ${cta.variant === 'primary' ? 'btn--primary' : ''}`
    if (cta.internal || (cta.to && cta.to.startsWith('/'))) {
      return <Link key={i} className={classes} to={cta.to}>{cta.label}</Link>
    }
    return (
      <a
        key={i}
        className={classes}
        href={cta.to}
        target={cta.newTab ? '_blank' : undefined}
        rel={cta.newTab ? 'noreferrer' : undefined}
      >
        {cta.label}
      </a>
    )
  }

  return (
    <section className="hero" aria-label="Destacados" data-size={slides[idx].size || 'md'}>
      {/* Pista de diapositivas */}
      <div
        className="hero__track"
        style={{ transform: `translate3d(-${idx * 100}%,0,0)` }}
      >
        {slides.map((s, i) => (
          <figure className="hero__slide" key={i}>
            <img
              src={s.src}
              srcSet={s.srcSet}
              alt={s.alt}
              loading={i === 0 ? 'eager' : 'lazy'}
              fetchPriority={i === 0 ? 'high' : 'low'}
              decoding="async"
              sizes="100vw"
              style={{ objectPosition: s.pos || 'center' }}
            />
          </figure>
        ))}
      </div>

      {/* Flechas de navegación manual */}
      <button
        type="button"
        className="hero__arrow hero__arrow--prev"
        onClick={prev}
        aria-label="Diapositiva anterior"
      >
        <span aria-hidden="true">❮</span>
      </button>
      <button
        type="button"
        className="hero__arrow hero__arrow--next"
        onClick={next}
        aria-label="Diapositiva siguiente"
      >
        <span aria-hidden="true">❯</span>
      </button>

      {/* Overlay centrado y estable */}
      <div className="hero__overlay">
        <div className="hero__inner">
          <h1>{slides[idx].h1}</h1>
          <p>{slides[idx].p}</p>
          <div className="hero__actions">
            {slides[idx].ctas?.map(renderCTA)}
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="hero__dots" role="group" aria-label="Cambiar diapositiva">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero__dot ${i === idx ? 'is-active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Ir a la diapositiva ${i + 1}`}
            aria-pressed={i === idx}
          />
        ))}
      </div>
    </section>
  )
}
