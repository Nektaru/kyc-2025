import { lazy, Suspense, useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { isConsentGiven, loadGA, trackPageview } from './analytics'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import ConsentBar from './components/ConsentBar.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import ScrollToTopButton from './components/ScrollToTopButton'
import WhatsAppButton from './components/WhatsAppButton.jsx'

// Home se carga de inmediato (es la portada y el elemento LCP).
import Home from './pages/Home.jsx'

// El resto de páginas se cargan bajo demanda (code-splitting) para aligerar
// el JavaScript inicial.
const Ofertas = lazy(() => import('./pages/Ofertas.jsx'))
const Resenas = lazy(() => import('./pages/Resenas.jsx'))
const Products = lazy(() => import('./pages/Products.jsx'))
const PolloAsado = lazy(() => import('./pages/PolloAsado.jsx'))
const Paellas = lazy(() => import('./pages/Paellas.jsx'))
const AsadosPorEncargo = lazy(() => import('./pages/AsadosPorEncargo.jsx'))
const PollosAsadosCoslada = lazy(() => import('./pages/PollosAsadosCoslada.jsx'))
const ComidaParaLlevarCoslada = lazy(() => import('./pages/ComidaParaLlevarCoslada.jsx'))
const PaellasCoslada = lazy(() => import('./pages/PaellasCoslada.jsx'))
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
      <ScrollToTop />
      <NavBar />
      <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/resenas" element={<Resenas />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/pollo-asado-san-fernando-de-henares" element={<PolloAsado />} />
          <Route path="/paellas-san-fernando-de-henares" element={<Paellas />} />
          <Route path="/asados-por-encargo" element={<AsadosPorEncargo />} />
          <Route path="/pollos-asados-coslada" element={<PollosAsadosCoslada />} />
          <Route path="/comida-para-llevar-coslada" element={<ComidaParaLlevarCoslada />} />
          <Route path="/paellas-coslada" element={<PaellasCoslada />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/aviso-legal" element={<AvisoLegal />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <ScrollToTopButton />
      <WhatsAppButton />
      <Footer />
      <ConsentBar />
    </>
  )
}
