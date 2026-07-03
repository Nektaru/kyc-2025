import { useState } from 'react'
import './mapEmbed.css'

const MAP_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.697885885374!2d-3.5362986!3d40.4288709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42308f645812db%3A0x7daded5415031301!2sKilo%20y%20Cuarto!5e0!3m2!1ses!2ses!4v1698916484247!5m2!1ses!2ses'

/**
 * Mapa con carga diferida ("facade"): muestra una tarjeta ligera y solo
 * descarga el iframe de Google Maps (~400 KiB) cuando el usuario hace clic.
 */
export default function MapEmbed({ title = 'Ubicación Kilo y Cuarto' }) {
  const [show, setShow] = useState(false)

  return (
    <div className="map__container">
      {show ? (
        <iframe
          title={title}
          src={MAP_SRC}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          className="mapFacade"
          onClick={() => setShow(true)}
          aria-label="Cargar el mapa de Google con la ubicación de Kilo y Cuarto"
        >
          <span className="mapFacade__pin" aria-hidden="true">📍</span>
          <span className="mapFacade__title">Kilo y Cuarto</span>
          <span className="mapFacade__addr">
            Calle Toledo 2, San Fernando de Henares (Madrid)
          </span>
          <span className="mapFacade__cta">Ver mapa</span>
        </button>
      )}
    </div>
  )
}
