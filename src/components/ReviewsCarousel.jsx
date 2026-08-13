import { useState, useEffect } from 'react'
import reviews from '../data/reviews'
import './reviewsCarousel.css'

function getVisible() {
  if (typeof window === 'undefined') return 3
  if (window.matchMedia('(max-width: 600px)').matches) return 1
  if (window.matchMedia('(max-width: 900px)').matches) return 2
  return 3
}

export default function ReviewsCarousel() {
  const [visible, setVisible] = useState(getVisible)
  const [idx, setIdx] = useState(0)
  const [anim, setAnim] = useState(true)

  useEffect(() => {
    const onResize = () => setVisible(getVisible())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Avanza una tarjeta cada 3,5 s
  useEffect(() => {
    const t = setTimeout(() => setIdx((i) => i + 1), 3500)
    return () => clearTimeout(t)
  }, [idx])

  // Al llegar al final, salta al principio sin animación (loop infinito)
  useEffect(() => {
    if (!anim) {
      const id = requestAnimationFrame(() =>
        requestAnimationFrame(() => setAnim(true))
      )
      return () => cancelAnimationFrame(id)
    }
  }, [anim])

  const N = reviews.length
  const step = 100 / visible
  const display = [...reviews, ...reviews.slice(0, visible)]

  const handleEnd = (e) => {
    if (e.propertyName !== 'transform') return
    if (idx >= N) {
      setAnim(false)
      setIdx(0)
    }
  }

  return (
    <section className="reviewsCar" aria-label="Reseñas de clientes">
      <div className="reviewsCar__head">
        <span className="reviewsCar__stars" aria-hidden="true">★★★★★</span>
        <h2>Lo que dicen nuestros clientes</h2>
        <p>Cientos de reseñas reales en Google. Estas son algunas:</p>
      </div>

      <div className="reviewsCar__viewport">
        <div
          className="reviewsCar__track"
          style={{
            transform: `translateX(-${idx * step}%)`,
            transition: anim ? 'transform 0.6s ease' : 'none',
          }}
          onTransitionEnd={handleEnd}
        >
          {display.map((r, i) => (
            <div className="reviewsCar__cell" key={i}>
              <article className="reviewCard">
                <div className="reviewCard__stars" aria-hidden="true">★★★★★</div>
                <p className="reviewCard__text">{r.text}</p>
                <p className="reviewCard__name">— {r.name}</p>
              </article>
            </div>
          ))}
        </div>
      </div>

      <div className="reviewsCar__cta">
        <a
          className="reviewsCar__btn"
          href="https://g.page/r/CQETAxVU7a19EBM/review"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dejar mi reseña ⭐
        </a>
      </div>
    </section>
  )
}
