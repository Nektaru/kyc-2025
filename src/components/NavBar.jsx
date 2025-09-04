import { Link, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import './navbar.css'

export default function NavBar() {
  const { pathname } = useLocation()
  const toggleRef = useRef(null)

  // Cierra el menú cuando haces clic en un enlace
  const closeMenu = () => {
    if (toggleRef.current) toggleRef.current.checked = false
  }

  // Cierra también cuando cambia la ruta (por back/forward, etc.)
  useEffect(() => {
    if (toggleRef.current) toggleRef.current.checked = false
  }, [pathname])

  // (Opcional) Cierra con tecla ESC
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape' && toggleRef.current) {
        toggleRef.current.checked = false
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <header className="nav">
      <div className="nav__inner">
        <input id="nav-toggle" type="checkbox" ref={toggleRef} />
        <label htmlFor="nav-toggle" className="nav__toggle" aria-label="Abrir menú">☰</label>
        <nav className="nav__menu">
          <Link
            className={`nav__link ${pathname==='/'?'is-active':''}`}
            to="/"
            onClick={closeMenu}
          >
            Inicio
          </Link>
          <Link
            className={`nav__link ${pathname==='/productos'?'is-active':''}`}
            to="/productos"
            onClick={closeMenu}
          >
            Nuestros productos
          </Link>
          <Link
            className={`nav__link ${pathname==='/about'?'is-active':''}`}
            to="/about"
            onClick={closeMenu}
          >
            ¿Quiénes somos?
          </Link>
          <Link
            className={`nav__link ${pathname==='/contacto'?'is-active':''}`}
            to="/contacto"
            onClick={closeMenu}
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  )
}
