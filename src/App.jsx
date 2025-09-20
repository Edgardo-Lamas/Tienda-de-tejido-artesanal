import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Arte from './pages/Arte'
import Articulos from './pages/Articulos'
import Historias from './pages/Historias'
import SobreNosotros from './pages/SobreNosotros'
import Testimonios from './pages/Testimonios'
import MapaFerias from './pages/MapaFerias'
import Promociones from './pages/Promociones'
import TiendaNube from './pages/TiendaNube'
import Contacto from './pages/Contacto'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-cream-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/arte" element={<Arte />} />
            <Route path="/articulos" element={<Articulos />} />
            <Route path="/historias" element={<Historias />} />
            <Route path="/sobre-nosotros" element={<SobreNosotros />} />
            <Route path="/testimonios" element={<Testimonios />} />
            <Route path="/mapa-ferias" element={<MapaFerias />} />
            <Route path="/promociones" element={<Promociones />} />
            <Route path="/tienda" element={<TiendaNube />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App