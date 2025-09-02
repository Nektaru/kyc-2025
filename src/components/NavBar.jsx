import { Link, useLocation } from 'react-router-dom'
import './navbar.css'

export default function NavBar() {
  const { pathname } = useLocation()
  return (
    <header className="nav">
      <div className="nav__inner">
        <input id="nav-toggle" type="checkbox" />
        <label htmlFor="nav-toggle" className="nav__toggle" aria-label="Abrir menú">☰</label>
        <nav className="nav__menu">
          <Link className={`nav__link ${pathname==='/'?'is-active':''}`} to="/">Inicio</Link>
          <Link className={`nav__link ${pathname==='/productos'?'is-active':''}`} to="/productos">Nuestros productos</Link>
          <Link className={`nav__link ${pathname==='/about'?'is-active':''}`} to="/about">¿Quiénes somos?</Link>
          <Link className={`nav__link ${pathname==='/contacto'?'is-active':''}`} to="/contacto">Contacto</Link>
        </nav>
      </div>
    </header>
  )
}
