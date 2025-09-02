import './logo.css'
import logo from '../assets/logo.webp' // pon aquí tu logo (svg/webp/png)

export default function LogoBar() {
  return (
    <div className="logoBar" role="banner" aria-label="Logotipo">
      <img className="logoBar__img" src={logo} alt="Kilo y Cuarto — Comida casera" />
    </div>
  )
}
