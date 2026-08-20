import './faq.css'

/**
 * Bloque de preguntas frecuentes. `items` es un array de { p, r }.
 * Se usa <details> para que funcione sin JavaScript y sea accesible con
 * teclado; el contenido está en el HTML, así que Google lo lee igual.
 */
export default function Faq({ titulo = 'Preguntas frecuentes', items }) {
  return (
    <section className="faq" aria-labelledby="faq-titulo">
      <h2 id="faq-titulo">{titulo}</h2>
      {items.map(({ p, r }) => (
        <details className="faq__item" key={p}>
          <summary>{p}</summary>
          <div className="faq__respuesta">{r}</div>
        </details>
      ))}
    </section>
  )
}
