import './product.css'

export default function ProductCard({ title, text, imgSrc, onOpen }) {
  return (
    <article className="productCard">
      <div className="productCard__text">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>

      <button
        type="button"
        className="productCard__imageBtn"
        onClick={onOpen}
        aria-label={`Ver más sobre ${title}`}
      >
        <img src={imgSrc} alt={title} />
      </button>
    </article>
  )
}
