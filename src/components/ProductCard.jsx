import './product.css'

export default function ProductCard({ title, text, imgSrc, onOpen }) {
  return (
    <article className="productCard">
      <div className="productCard__text">
        <h3>{title}</h3>
        <p>{text}</p>
        <button type="button" className="productCard__more" onClick={onOpen}>
          + información
        </button>
      </div>

      <button
        type="button"
        className="productCard__imageBtn"
        onClick={onOpen}
        aria-label={`Ver más sobre ${title}`}
      >
        <img src={imgSrc} alt={title} loading="lazy" decoding="async" />
      </button>
    </article>
  )
}
