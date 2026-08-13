import '../components/legal.css'
import Seo from '../components/Seo'

export default function Cookies() {
  return (
    <main className="legal-page">
      <Seo title="Política de Cookies | Kilo y Cuarto" description="Política de cookies de Kilo y Cuarto." path="/cookies" noindex />
      <h1>Política de Cookies</h1>
      <p>
        En Kilo y Cuarto usamos cookies para que la web funcione correctamente y para
        entender de forma anónima cómo se utiliza, con el fin de mejorarla.
      </p>

      <h2>¿Qué cookies utilizamos?</h2>
      <p>
        <strong>Cookies técnicas (necesarias):</strong> imprescindibles para el
        funcionamiento básico del sitio. No requieren consentimiento.
      </p>
      <p>
        <strong>Cookies analíticas (Google Analytics):</strong> utilizamos Google
        Analytics 4, un servicio de Google LLC, para obtener estadísticas anónimas de
        uso (páginas visitadas, tiempo de navegación, dispositivo, procedencia del
        visitante). Estas cookies <strong>solo se activan si aceptas su uso</strong> en
        el aviso de cookies. La información se trata de forma agregada y no permite
        identificarte personalmente.
      </p>

      <h2>Cómo gestionar las cookies</h2>
      <p>
        Puedes rechazar las cookies analíticas simplemente no aceptándolas en el aviso
        de cookies. Además, puedes configurar tu navegador para bloquear o eliminar las
        cookies en cualquier momento, aunque eso podría afectar al funcionamiento del
        sitio. Más información sobre Google Analytics en las{' '}
        <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noreferrer">
          políticas de privacidad de Google
        </a>.
      </p>
    </main>
  )
}
