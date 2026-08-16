import './footer.css'
import { Link } from 'react-router-dom'
import logoCream from '../assets/logo-cream.webp'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <img className="footer__logo" src={logoCream} alt="Kilo y Cuarto" width="600" height="123" />
          <p className="footer__tagline">
            Comida casera para llevar en San Fernando de Henares. Cocinando como
            en casa desde 1994.
          </p>
          <div className="footer__social" aria-label="Redes sociales">
            <a href="https://www.instagram.com/elkiloycuarto" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.facebook.com/profile.php?id=100071089811677" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.tiktok.com/@elkiloycuarto" target="_blank" rel="noopener noreferrer">TikTok</a>
          </div>
        </div>

        <nav className="footer__col" aria-label="Navegación">
          <h3>Explora</h3>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/ofertas">Ofertas</Link></li>
            <li><Link to="/productos">Nuestros productos</Link></li>
            <li><Link to="/resenas">Reseñas</Link></li>
            <li><Link to="/about">¿Quiénes somos?</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </nav>

        <nav className="footer__col" aria-label="Especialidades">
          <h3>Especialidades</h3>
          <ul>
            <li><Link to="/pollo-asado-san-fernando-de-henares">Pollo asado</Link></li>
            <li><Link to="/paellas-san-fernando-de-henares">Paellas y arroces</Link></li>
            <li><Link to="/asados-por-encargo">Asados por encargo</Link></li>
          </ul>
        </nav>

        <div className="footer__col">
          <h3>Dónde estamos</h3>
          <ul>
            <li>
              <a href="https://www.google.com/maps/place/Kilo+y+Cuarto/@40.4288709,-3.5362986,758m/data=!3m1!1e3!4m6!3m5!1s0xd42308f645812db:0x7daded5415031301!8m2!3d40.4288668!4d-3.5337237!16s%2Fg%2F1hhvx128l?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer">
                Calle Toledo 2<br />San Fernando de Henares (Madrid)
              </a>
            </li>
            <li><a href="tel:+34916716618">91 671 66 18</a></li>
            <li><a href="mailto:encargos@kiloycuarto.es">encargos@kiloycuarto.es</a></li>
            <li>Lunes a domingo · 9:30 – 15:30</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {year} Kilo y Cuarto · Marca registrada ®</p>
        <nav className="footer__legal" aria-label="Legal">
          <Link to="/aviso-legal">Aviso legal</Link>
          <Link to="/privacidad">Privacidad</Link>
          <Link to="/cookies">Cookies</Link>
        </nav>
      </div>
    </footer>
  )
}
