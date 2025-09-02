import './consentBar.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function ConsentBar() {
  const [accepted, setAccepted] = useState(true)

  useEffect(() => {
    const alreadyAccepted = localStorage.getItem('cookiesAccepted')
    if (!alreadyAccepted) setAccepted(false)
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true')
    setAccepted(true)
  }

  if (accepted) return null

  return (
    <div className="consent-bar">
      <p className="consent-bar__text">
        Nuestra web utiliza cookies para comprender cómo usas nuestro sitio, proporcionar funcionalidad esencial y mejorar tu experiencia. Al usar esta web, aceptas el uso de cookies. Puedes leer más en nuestra{' '}
        <Link to="/privacidad" className="consent-bar__link">política de privacidad</Link>.
      </p>
      <button className="consent-bar__btn" onClick={handleAccept}>Aceptar</button>
    </div>
  )
}
