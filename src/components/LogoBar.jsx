import { Link } from "react-router-dom";
import './logo.css'
import logo from '../assets/logo.webp' // pon aquí tu logo (svg/webp/png)

export default function LogoBar() {
  return (
    <div className="logoBar" role="banner" aria-label="Logotipo">
      <Link to="/">
        <img 
          className="logoBar__img" 
          src={logo} 
          alt="Kilo y Cuarto — Comida casera" 
        />
      </Link>
    </div>
  )
}