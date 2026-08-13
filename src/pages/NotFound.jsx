import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import '../components/notfound.css'

export default function NotFound() {
  return (
    <main className="notfound">
      <Seo
        title="Página no encontrada | Kilo y Cuarto"
        description="La página que buscas no existe."
        path="/404"
        noindex
      />
      <div className="notfound__inner">
        <p className="notfound__code">404</p>
        <h1>Uy… esta página no existe</h1>
        <p className="notfound__text">
          Puede que el enlace esté roto o que la página se haya movido. Pero tranquilo,
          lo bueno sigue aquí:
        </p>
        <div className="notfound__actions">
          <Link className="notfound__btn notfound__btn--primary" to="/">Volver al inicio</Link>
          <Link className="notfound__btn" to="/productos">Ver la carta</Link>
        </div>
      </div>
    </main>
  )
}
