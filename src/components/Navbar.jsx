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
                className={`font-medium transition-all duration-300 relative group px-3 py-2 rounded-lg ${
                  isActive(item.path)
                    ? 'text-terracotta-600 bg-terracotta-50'
                    : 'text-gray-700 hover:text-terracotta-600 hover:bg-terracotta-50/50'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-1 left-3 right-3 h-0.5 bg-terracotta-500 transform transition-all duration-300 ease-out ${
                  isActive(item.path) 
                    ? 'scale-x-100 opacity-100' 
                    : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                }`} />
                <span className={`absolute bottom-0.5 left-3 right-3 h-0.5 bg-terracotta-300 transform transition-all duration-300 ease-out delay-75 ${
                  isActive(item.path) 
                    ? 'scale-x-100 opacity-60' 
                    : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-60'
                }`} />
              </Link>
            ))}
          </div>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <Link 
              to="/tienda" 
              className="hidden sm:flex items-center space-x-2 btn-primary relative group overflow-hidden"
            >
              <ShoppingBag className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Tienda</span>
              <span className="absolute inset-0 bg-terracotta-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
            </Link>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden p-2 rounded-lg hover:bg-terracotta-50 hover:text-terracotta-600 transition-all duration-300 relative group"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              <span className="absolute inset-0 bg-terracotta-100 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200 ease-out opacity-0 group-hover:opacity-100"></span>
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
              className={`block py-3 px-4 rounded-lg font-medium transition-all duration-300 relative group ${
                isActive(item.path)
                  ? 'text-terracotta-600 bg-terracotta-50 border-l-4 border-terracotta-500'
                  : 'text-gray-700 hover:text-terracotta-600 hover:bg-terracotta-50/70 hover:border-l-4 hover:border-terracotta-400 border-l-4 border-transparent'
              }`}
            >
              {item.name}
              {/* Mobile underline effect */}
              <span className={`absolute bottom-2 left-4 right-4 h-0.5 bg-terracotta-500 transform transition-all duration-300 ease-out ${
                isActive(item.path) 
                  ? 'scale-x-100 opacity-100' 
                  : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
              }`} />
            </Link>
          ))}
          <Link 
            to="/tienda" 
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center space-x-2 btn-primary w-full mt-6 relative group overflow-hidden"
          >
            <ShoppingBag className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Visitar Tienda</span>
            <span className="absolute inset-0 bg-terracotta-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar