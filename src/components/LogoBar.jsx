import './logo.css'
import logoSet from '../assets/logo.webp?w=768;1400&format=webp&quality=90&as=srcset'
import logoUrl from '../assets/logo.webp?w=1400&format=webp&quality=90&as=url'

export default 

function LogoBar() { 
  return ( 
      <a href='/'>
        <div className="logoBar" role="banner" aria-label="Logotipo"> 
            <img className="logoBar__img" src={logoUrl} srcSet={logoSet} sizes="665px" alt="Kilo y Cuarto — Comida casera" />
        </div> 
      </a>

  ) 
}



