import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Al cambiar de página, lleva la vista arriba del todo.
 *
 * En una SPA el navegador no reinicia el scroll al cambiar de ruta: si venías
 * del final de una página larga, la nueva se abría a esa misma altura (por
 * ejemplo directamente en el footer) y parecía que no había cargado.
 *
 * Si la URL trae un ancla (#seccion) se respeta y se baja a esa sección, para
 * no romper los enlaces del tipo /productos#paellas-arroces.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // Evita que el navegador restaure la posición anterior al recargar o al
    // volver atrás, que es la otra vía por la que se acababa en mitad de la
    // página.
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  useEffect(() => {
    if (hash) {
      // Al abrir un enlace tipo /productos#paellas-arroces la sección no está
      // disponible de inmediato: React monta con createRoot y vacía el HTML
      // pre-renderizado, así que hasta que no llega el chunk de la página (se
      // cargan bajo demanda) el ancla no existe y el navegador pierde el
      // salto. Por eso esperamos a que aparezca y, una vez encontrada,
      // reajustamos un poco más por si las imágenes al cargar desplazan el
      // contenido.
      let cancelado = false
      const limite = Date.now() + 5000
      let encontradaEn = 0

      const ajustar = () => {
        if (cancelado) return
        const destino = document.querySelector(hash)

        if (destino) {
          destino.scrollIntoView()
          if (!encontradaEn) encontradaEn = Date.now()
          // Sigue corrigiendo 1,5 s tras encontrarla, por si el layout cambia.
          if (Date.now() - encontradaEn < 1500) {
            setTimeout(ajustar, 150)
          }
          return
        }

        if (Date.now() < limite) requestAnimationFrame(ajustar)
      }

      ajustar()
      return () => {
        cancelado = true
      }
    }

    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
