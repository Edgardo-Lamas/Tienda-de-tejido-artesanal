import React from 'react'
import ProductCard from './ProductCard'
import { products } from '../data/products'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const FeaturedProducts = ({ limit = 6 }) => {
  const featuredProducts = products.filter(product => product.featured).slice(0, limit)

  return (
    <section className="section-padding gradient-bg">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-terracotta-100 text-terracotta-700 rounded-full text-sm font-medium mb-4">
            Selección Especial
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
            Nuestros <span className="text-gradient">Destacados</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cada prenda en nuestra colección destacada ha sido cuidadosamente seleccionada 
            por su excepcional calidad, diseño único y la historia que lleva tejida en cada fibra.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <ProductCard 
                product={product} 
                featured={true}
              />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <Link 
              to="/tienda"
              className="btn-primary flex items-center space-x-2 group"
            >
              <span>Ver Toda la Colección</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link 
              to="/sobre-nosotros"
              className="btn-secondary flex items-center space-x-2"
            >
              <span>Conoce Nuestra Historia</span>
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { number: '500+', label: 'Prendas Creadas' },
            { number: '98%', label: 'Clientes Satisfechos' },
            { number: '15+', label: 'Años de Experiencia' },
            { number: '100%', label: 'Fibras Naturales' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300"
            >
              <div className="text-2xl md:text-3xl font-serif font-bold text-terracotta-600 mb-2">
                {stat.number}
              </div>
              <div className="text-sm font-medium text-gray-700">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts