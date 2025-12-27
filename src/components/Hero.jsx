import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './hero.css'

import slide1 from '../assets/slide1.webp'
import slide2 from '../assets/slide2.webp'
import slide3 from '../assets/slide3.svg'

/**
 * Consejo de assets:
 * - Usa imágenes horizontales (16:9 aprox.) 1600×900 o 1920×1000 .webp (150–300 KB).
 * - Si alguna necesita otro encuadre, ajusta 'pos' (object-position) por slide.
 * - 'size' opcional: 'sm' | 'md' | 'lg' para variar el tamaño de tipografías por slide.
 */
const slides = [
  {
  src: slide1,
  alt: 'Los mejores pollos asados de Madrid',
  h1: 'Los mejores pollos asados de Madrid',
  p: 'Están en Kilo y Cuarto',
  pos: 'center center',
  size: 'lg',
  ctas: [
    {
      label: 'Nuestros productos',
      to: '/productos',
      variant: 'primary',
      newTab: true
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
    src: slide2,
    alt: 'Cocinando para ti desde 1994',
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
    src: slide3,
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
  const timer = useRef(0)

  useEffect(() => {
  timer.current = window.setInterval(() => setIdx(i => (i + 1) % slides.length), 8000)
  return () => window.clearInterval(timer.current)
}, [])


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
              alt={s.alt}
              loading={i === 0 ? 'eager' : 'lazy'}
              decoding="async"
              sizes="100vw"
              style={{ objectPosition: s.pos || 'center' }}
            />
          </figure>
        ))}
      </div>

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
      <div className="hero__dots" role="tablist" aria-label="Cambiar diapositiva">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero__dot ${i === idx ? 'is-active' : ''}`}
            onClick={() => setIdx(i)}
            aria-label={`Ir a la diapositiva ${i + 1}`}
            aria-pressed={i === idx}
          />
        ))}
      </div>
    </section>
  )
}
