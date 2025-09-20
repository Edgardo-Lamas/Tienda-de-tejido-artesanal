import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ShoppingBag, Heart } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Arte', path: '/arte' },
    { name: 'Artículos', path: '/articulos' },
    { name: 'Historias', path: '/historias' },
    { name: 'Sobre Nosotros', path: '/sobre-nosotros' },
    { name: 'Testimonios', path: '/testimonios' },
    { name: 'Mapa Ferias', path: '/mapa-ferias' },
    { name: 'E-books', path: '/promociones' },
    { name: 'Tienda', path: '/tienda' },
    { name: 'Contacto', path: '/contacto' }
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-soft shadow-soft' 
        : 'bg-gradient-to-b from-white/90 to-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-terracotta-500 to-petrol-500 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
              <Heart className="w-6 h-6 text-white" fill="currentColor" />
            </div>
            <div>
              <h1 className="text-2xl font-serif font-semibold text-gray-900">HANDYMAN</h1>
              <p className="text-xs text-terracotta-600 font-medium tracking-wide">Tejidos con Amor</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors duration-300 relative group ${
                  isActive(item.path)
                    ? 'text-terracotta-600'
                    : 'text-gray-700 hover:text-terracotta-600'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-terracotta-500 transform transition-transform duration-300 ${
                  isActive(item.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>
            ))}
          </div>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <Link 
              to="/tienda" 
              className="hidden sm:flex items-center space-x-2 btn-primary"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Tienda</span>
            </Link>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`xl:hidden transition-all duration-300 ${
        isOpen 
          ? 'max-h-screen opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="bg-white border-t border-gray-100 px-4 py-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block py-3 px-4 rounded-lg font-medium transition-colors duration-300 ${
                isActive(item.path)
                  ? 'text-terracotta-600 bg-terracotta-50'
                  : 'text-gray-700 hover:text-terracotta-600 hover:bg-gray-50'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link 
            to="/tienda" 
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center space-x-2 btn-primary w-full mt-6"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Visitar Tienda</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar