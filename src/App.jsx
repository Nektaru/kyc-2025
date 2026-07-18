import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import LogoBar from './components/LogoBar.jsx'
import Footer from './components/Footer.jsx'
import ConsentBar from './components/ConsentBar.jsx'
import ScrollToTopButton from './components/ScrollToTopButton'

// Home se carga de inmediato (es la portada y el elemento LCP).
import Home from './pages/Home.jsx'

// El resto de páginas se cargan bajo demanda (code-splitting) para aligerar
// el JavaScript inicial.
const Products = lazy(() => import('./pages/Products.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const AvisoLegal = lazy(() => import('./pages/AvisoLegal.jsx'))
const Cookies = lazy(() => import('./pages/Cookies.jsx'))
const Privacidad = lazy(() => import('./pages/Privacidad.jsx'))

export default function App() {
  return (
    <>
      <LogoBar />
      <NavBar />
      <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/aviso-legal" element={<AvisoLegal />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/privacidad" element={<Privacidad />} />
        </Routes>
      </Suspense>
      <ScrollToTopButton />
      <Footer />
      <ConsentBar />
    </>
  )
}
