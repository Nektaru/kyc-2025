  import './footer.css'
  import { Link } from 'react-router-dom'

  export default function Footer() {
    return (
      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__column footer__brand">
            <p className="footer__title">Kilo y Cuarto</p>
            <p>Calle Toledo 2, San Fernando de Henares, 28830 Madrid</p>
            <p>1 Kilo y Cuarto es una marca registrada &#174;</p>
          </div>

          <div className="footer__column footer__social">
            <p className="footer__subtitle">Síguenos</p>
            <a href="https://instagram.com/elkiloycuarto" target="_blank" rel="https://www.instagram.com/elkiloycuarto">Instagram</a>
            <a href="https://www.facebook.com/profile.php?id=100071089811677" target="_blank" rel="https://www.facebook.com/profile.php?id=100071089811677">Facebook</a>
            <a href="https://www.tiktok.com/@elkiloycuarto" target="_blank" rel="https://www.tiktok.com/@elkiloycuarto">TikTok</a>
          </div>

          <div className="footer__column footer__legal">
            <p className="footer__subtitle">Legal</p>
            <Link to="/aviso-legal">Aviso legal</Link>
            <Link to="/privacidad">Privacidad</Link>
            <Link to="/cookies">Cookies</Link>
          </div>
        </div>
      </footer>
    )
  }
