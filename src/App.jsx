import { lazy, Suspense, useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { isConsentGiven, loadGA, trackPageview } from './analytics'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import ConsentBar from './components/ConsentBar.jsx'
import ScrollToTopButton from './components/ScrollToTopButton'

// Home se carga de inmediato (es la portada y el elemento LCP).
import Home from './pages/Home.jsx'

// El resto de páginas se cargan bajo demanda (code-splitting) para aligerar
// el JavaScript inicial.
const Ofertas = lazy(() => import('./pages/Ofertas.jsx'))
const Resenas = lazy(() => import('./pages/Resenas.jsx'))
const Products = lazy(() => import('./pages/Products.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const AvisoLegal = lazy(() => import('./pages/AvisoLegal.jsx'))
const Cookies = lazy(() => import('./pages/Cookies.jsx'))
const Privacidad = lazy(() => import('./pages/Privacidad.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

export default function App() {
  const location = useLocation()
  const firstLoad = useRef(true)

  // Carga GA si el usuario ya aceptó cookies en una visita anterior
  useEffect(() => {
    if (isConsentGiven()) loadGA()
  }, [])

  // Vistas de página al cambiar de ruta en la SPA
  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false // la primera vista la envía gtag al configurarse
      return
    }
    trackPageview(location.pathname + location.search)
  }, [location])

  return (
    <>
      <NavBar />
      <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/resenas" element={<Resenas />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/aviso-legal" element={<AvisoLegal />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <ScrollToTopButton />
      <Footer />
      <ConsentBar />
    </>
  )
}
