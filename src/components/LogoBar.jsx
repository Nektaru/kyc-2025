import './logo.css' 
import logo from '../assets/logo.webp' 

export default 

function LogoBar() { 
  return ( 
      <a href='/'>
        <div className="logoBar" role="banner" aria-label="Logotipo"> 
            <img className="logoBar__img" src={logo} alt="Kilo y Cuarto — Comida casera" /> 
        </div> 
      </a>

  ) 
}



