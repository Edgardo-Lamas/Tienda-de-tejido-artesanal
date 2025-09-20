import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Navegación',
      links: [
        { name: 'Inicio', path: '/' },
        { name: 'Sobre Nosotros', path: '/sobre-nosotros' },
        { name: 'Nuestros Productos', path: '/tienda' },
        { name: 'Artículos', path: '/articulos' },
        { name: 'Contacto', path: '/contacto' }
      ]
    },
    {
      title: 'Productos',
      links: [
        { name: 'Sweaters', path: '/tienda?categoria=sweaters' },
        { name: 'Gorras', path: '/tienda?categoria=gorras' },
        { name: 'Ponchos', path: '/tienda?categoria=ponchos' },
        { name: 'Arte Textil', path: '/arte' },
        { name: 'E-books Gratuitos', path: '/promociones' }
      ]
    },
    {
      title: 'Recursos',
      links: [
        { name: 'Guías de Cuidado', path: '/articulos' },
        { name: 'Testimonios', path: '/testimonios' },
        { name: 'Mapa de Ferias', path: '/mapa-ferias' },
        { name: 'Historias', path: '/historias' },
        { name: 'Newsletter', path: '/contacto' }
      ]
    }
  ]

  return (
    <footer className="bg-gradient-to-br from-petrol-700 via-petrol-600 to-sage-700 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-terracotta-500 to-cream-300 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" fill="currentColor" />
              </div>
              <div>
                <h2 className="text-2xl font-serif font-semibold">HANDYMAN</h2>
                <p className="text-sm text-cream-200 font-medium">Tejidos con Amor</p>
              </div>
            </div>
            
            <p className="text-cream-100 mb-6 leading-relaxed">
              Cada prenda cuenta una historia. Creamos piezas únicas con técnicas artesanales 
              y materiales naturales de la más alta calidad.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-cream-200">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">hola@handyman.com.ar</span>
              </div>
              <div className="flex items-center space-x-3 text-cream-200">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">+54 11 5555-1234</span>
              </div>
              <div className="flex items-center space-x-3 text-cream-200">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-serif font-semibold mb-6 text-cream-100">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path}
                      className="text-cream-200 hover:text-cream-100 transition-colors duration-300 text-sm hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-petrol-500 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-serif font-semibold mb-4 text-cream-100">
              Mantente Conectado
            </h3>
            <p className="text-cream-200 mb-8">
              Suscríbete a nuestro newsletter para recibir novedades, promociones exclusivas 
              y contenido sobre el mundo artesanal.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-cream-200 focus:outline-none focus:ring-2 focus:ring-terracotta-400 focus:border-transparent backdrop-blur-sm"
              />
              <button className="px-6 py-3 bg-terracotta-500 hover:bg-terracotta-600 text-white font-medium rounded-lg transition-colors duration-300 whitespace-nowrap">
                Suscribirme
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-petrol-500 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-cream-200 text-sm">
              © {currentYear} HANDYMAN. Todos los derechos reservados. 
              <span className="mx-2">•</span>
              Hecho con <Heart className="w-3 h-3 inline mx-1 text-terracotta-400" fill="currentColor" /> en Argentina
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a 
                href="#" 
                className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-cream-200 hover:text-white hover:bg-white/20 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-cream-200 hover:text-white hover:bg-white/20 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-cream-200 hover:text-white hover:bg-white/20 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer