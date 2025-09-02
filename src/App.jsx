import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import LogoBar from './components/LogoBar.jsx'
import Footer from './components/Footer.jsx'
import ConsentBar from './components/ConsentBar.jsx'


import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import AvisoLegal from './pages/AvisoLegal.jsx'
import Cookies from './pages/Cookies.jsx'
import Privacidad from './pages/Privacidad.jsx'

export default function App() {
  return (
    <>
      <LogoBar />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/aviso-legal" element={<AvisoLegal />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/privacidad" element={<Privacidad />} />
      </Routes>
      <Footer />
      <ConsentBar />
    </>
  )
}
