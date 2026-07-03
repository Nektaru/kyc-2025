import '../components/legal.css'
import Seo from '../components/Seo'

export default function Cookies() {
  return (
    <main className="legal-page">
      <Seo title="Política de Cookies | Kilo y Cuarto" description="Política de cookies de Kilo y Cuarto." path="/cookies" noindex />
      <h1>Política de Cookies</h1>
      <p>
        Esta web no utiliza cookies propias ni de terceros con fines publicitarios ni de análisis. Solo se usan cookies técnicas necesarias para su funcionamiento básico.
      </p>
      <p>
        Puedes configurar tu navegador para bloquear o eliminar las cookies, aunque eso puede afectar al correcto funcionamiento del sitio.
      </p>
    </main>
  )
}
