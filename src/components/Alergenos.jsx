import { getAlergenos } from '../data/alergenos'
import './alergenos.css'

/**
 * Lista de alérgenos de un plato dentro del modal de "+ información".
 *
 * Mientras la información no esté revisada en cocina (ver
 * ALERGENOS_REVISADOS en src/data/alergenos.js), no se muestra ninguna lista:
 * se invita a preguntar, que es lo correcto si no hay datos confirmados.
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
              <span className="alergenos__icono" aria-hidden="true">{a.icono}</span>
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
