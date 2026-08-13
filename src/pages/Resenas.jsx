import Seo from '../components/Seo'
import reviews from '../data/reviews'
import '../components/reviewsCarousel.css'
import '../components/resenas.css'

export default function Resenas() {
  return (
    <main className="resenas">
      <Seo
        title="Nuestras reseñas | Kilo y Cuarto · San Fernando de Henares"
        description="Reseñas reales de clientes de Kilo y Cuarto: pollo asado, paellas y comida casera para llevar en San Fernando de Henares (Madrid)."
        path="/resenas"
      />

      <header className="resenas__header">
        <span className="resenas__stars" aria-hidden="true">★★★★★</span>
        <h1>Lo que dicen nuestros clientes</h1>
        <p>
          Gracias a cientos de clientes que confían en nosotros cada día. Estas son
          algunas de sus reseñas reales en Google.
        </p>
      </header>

      <div className="resenas__grid">
        {reviews.map((r, i) => (
          <article className="reviewCard" key={i}>
            <div className="reviewCard__stars" aria-hidden="true">★★★★★</div>
            <p className="reviewCard__text reviewCard__text--full">{r.text}</p>
            <p className="reviewCard__name">— {r.name}</p>
          </article>
        ))}
      </div>

      <div className="resenas__cta">
        <p>¿Ya nos conoces? Cuéntale al mundo tu experiencia.</p>
        <a
          className="reviewsCar__btn"
          href="https://g.page/r/CQETAxVU7a19EBM/review"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dejar mi reseña ⭐
        </a>
      </div>
    </main>
  )
}
