import { useEffect } from 'react'

/**
 * Inserta un bloque de datos estructurados (JSON-LD) en el <head> mientras la
 * página está montada, y lo retira al salir para que no se quede pegado a
 * otras rutas de la SPA.
 *
 * El pre-renderizado captura el HTML ya con el <script> dentro, así que Google
 * lo ve sin necesidad de ejecutar JavaScript.
 */
export default function JsonLd({ id, data }) {
  useEffect(() => {
    let el = document.getElementById(id)
    if (!el) {
      el = document.createElement('script')
      el.type = 'application/ld+json'
      el.id = id
      document.head.appendChild(el)
    }
    el.textContent = JSON.stringify(data)

    return () => {
      const actual = document.getElementById(id)
      if (actual) actual.remove()
    }
  }, [id, data])

  return null
}
