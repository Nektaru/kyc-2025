import { getAlergenos } from '../data/alergenos'
import './alergenos.css'

/**
 * Icono de sésamo: no existe emoji para este alérgeno, así que se dibuja a
 * medida con el mismo tamaño óptico que el resto (emojis) para que la fila de
 * pastillas quede uniforme. Se usa `currentColor` para que herede el color del
 * texto de la pastilla.
 */
function IconoSesamo() {
  return (
    <svg
      className="alergenos__svg"
      viewBox="0 0 20 20"
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      {/* Cuatro semillas de sésamo con la forma de gota característica */}
      <g fill="currentColor">
        <ellipse cx="6.6" cy="6.3" rx="2.5" ry="3.5" transform="rotate(-28 6.6 6.3)" />
        <ellipse cx="13.5" cy="7.4" rx="2.3" ry="3.3" transform="rotate(22 13.5 7.4)" />
        <ellipse cx="6.1" cy="14" rx="2.3" ry="3.3" transform="rotate(18 6.1 14)" />
        <ellipse cx="13.2" cy="14.2" rx="2.5" ry="3.5" transform="rotate(-24 13.2 14.2)" />
      </g>
    </svg>
  )
}

function Icono({ alergeno }) {
  if (alergeno.svgId === 'sesamo') return <IconoSesamo />
  return (
    <span className="alergenos__icono" aria-hidden="true">
      {alergeno.icono}
    </span>
  )
}

/**
 * Lista de alérgenos de un plato dentro del modal de "+ información".
 *
 * Si la información no está revisada (ver ALERGENOS_REVISADOS en
 * src/data/alergenos.js), no se muestra ninguna lista: se invita a preguntar,
 * que es lo correcto si no hay datos confirmados.
 */
export default function Alergenos({ id }) {
  const alergenos = getAlergenos(id)

  if (alergenos === null) {
    return (
      <p className="alergenos__consulta">
        Consúltanos los alérgenos de este plato en el{' '}
        <a href="tel:+34916716618">91 671 66 18</a> o al recogerlo en tienda.
      </p>
    )
  }

  return (
    <>
      {alergenos.length > 0 ? (
        <ul className="alergenos__lista">
          {alergenos.map((a) => (
            <li className="alergenos__item" key={a.nombre}>
              <Icono alergeno={a} />
              {a.nombre}
            </li>
          ))}
        </ul>
      ) : (
        <p className="alergenos__ninguno">
          Sin alérgenos de declaración obligatoria.
        </p>
      )}

      <p className="alergenos__aviso">
        Elaborado en una cocina donde se manipulan todos los alérgenos, por lo
        que no podemos descartar trazas. Si tienes alergia o intolerancia,
        avísanos antes de hacer el pedido.
      </p>
    </>
  )
}
