import { Link, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import './navbar.css'
import logoSet from '../assets/logo.webp?w=768;1400&format=webp&quality=90&as=srcset'
import logoUrl from '../assets/logo.webp?w=1400&format=webp&quality=90&as=url'

export default function NavBar() {
  const { pathname } = useLocation()
  const toggleRef = useRef(null)

  const closeMenu = () => {
    if (toggleRef.current) toggleRef.current.checked = false
  }

  useEffect(() => {
    if (toggleRef.current) toggleRef.current.checked = false
  }, [pathname])

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
        <Link to="/" className="nav__logo" onClick={closeMenu} aria-label="Kilo y Cuarto — Inicio">
          <img
            src={logoUrl}
            srcSet={logoSet}
            sizes="(max-width: 768px) 200px, 300px"
            alt="Kilo y Cuarto"
            width="600"
            height="123"
          />
        </Link>

        <input id="nav-toggle" type="checkbox" ref={toggleRef} />
        <label htmlFor="nav-toggle" className="nav__toggle" aria-label="Abrir menú">☰</label>

        <nav className="nav__menu">
          <Link className={`nav__link ${pathname === '/' ? 'is-active' : ''}`} to="/" onClick={closeMenu}>Inicio</Link>
          <Link className={`nav__link ${pathname === '/ofertas' ? 'is-active' : ''}`} to="/ofertas" onClick={closeMenu}>Ofertas</Link>
          <Link className={`nav__link ${pathname === '/productos' ? 'is-active' : ''}`} to="/productos" onClick={closeMenu}>Nuestros productos</Link>
          <Link className={`nav__link ${pathname === '/about' ? 'is-active' : ''}`} to="/about" onClick={closeMenu}>¿Quiénes somos?</Link>
          <Link className={`nav__link ${pathname === '/contacto' ? 'is-active' : ''}`} to="/contacto" onClick={closeMenu}>Contacto</Link>
        </nav>
      </div>
    </header>
  )
}
