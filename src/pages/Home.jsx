import React from 'react'
import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import { Heart, Leaf, Award, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {
  const features = [
    {
      icon: Heart,
      title: 'Tejido con Amor',
      description: 'Cada prenda es creada con dedicación y pasión, poniendo el corazón en cada punto.',
      color: 'text-terracotta-600'
    },
    {
      icon: Leaf,
      title: 'Fibras Naturales',
      description: 'Utilizamos únicamente materiales naturales de la más alta calidad, respetando el medio ambiente.',
      color: 'text-sage-600'
    },
    {
      icon: Award,
      title: 'Calidad Premium',
      description: 'Técnicas artesanales transmitidas por generaciones garantizan la excelencia en cada detalle.',
      color: 'text-petrol-600'
    },
    {
      icon: Users,
      title: 'Comunidad Artesanal',
      description: 'Formamos parte de una red de artesanos comprometidos con la tradición y la innovación.',
      color: 'text-terracotta-500'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Hero />

      {/* Welcome Section */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-terracotta-100 text-terracotta-700 rounded-full text-sm font-medium mb-6">
              Bienvenidos a HANDYMAN
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-8 leading-tight">
              Donde cada punto cuenta una <span className="text-gradient">historia</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              En HANDYMAN creemos que la moda verdadera trasciende las tendencias. 
              Cada una de nuestras prendas es una obra de arte tejida a mano, 
              combinando técnicas ancestrales con diseños contemporáneos para crear 
              piezas únicas que perduran en el tiempo.
            </p>
            <p className="text-base text-gray-500 mb-10">
              Desde nuestro taller en Argentina, trabajamos con fibras naturales 
              cuidadosamente seleccionadas, honrando la tradición artesanal 
              mientras construimos un futuro más sostenible para la moda.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/sobre-nosotros" className="btn-primary">
                Conoce Nuestra Historia
              </Link>
              <Link to="/tienda" className="btn-secondary">
                Explorar Colección
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              ¿Por qué elegir <span className="text-gradient">HANDYMAN</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nuestro compromiso con la excelencia se refleja en cada aspecto 
              de nuestro proceso creativo y en los valores que nos definen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div 
                  key={index}
                  className="text-center p-8 rounded-xl hover:shadow-card transition-all duration-300 group"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300 mb-6`}>
                    <IconComponent className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <FeaturedProducts />

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <span className="inline-block px-4 py-2 bg-sage-100 text-sage-700 rounded-full text-sm font-medium mb-6">
                Nuestro Proceso
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-8">
                Del hilo a la obra maestra
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    step: '01',
                    title: 'Selección de Fibras',
                    description: 'Elegimos cuidadosamente las mejores fibras naturales, priorizando la calidad y el origen sostenible.'
                  },
                  {
                    step: '02',
                    title: 'Diseño Artesanal',
                    description: 'Cada prenda es diseñada con atención al detalle, combinando tradición con toques contemporáneos.'
                  },
                  {
                    step: '03',
                    title: 'Tejido a Mano',
                    description: 'Nuestros artesanos tejen cada punto con paciencia y maestría, creando piezas verdaderamente únicas.'
                  },
                  {
                    step: '04',
                    title: 'Control de Calidad',
                    description: 'Cada prenda pasa por un riguroso proceso de revisión antes de llegar a tus manos.'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-terracotta-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link to="/historias" className="btn-secondary">
                  Ver Más Sobre Nuestro Proceso
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-hover">
                <img
                  src="/img/process/artisan-working.jpg"
                  alt="Artesano tejiendo"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-card">
                <div className="text-2xl font-serif font-bold text-terracotta-600 mb-2">15+</div>
                <div className="text-sm font-medium text-gray-700">Años de experiencia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-petrol-600 to-sage-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            ¿Listo para descubrir tu próxima prenda favorita?
          </h2>
          <p className="text-lg text-cream-100 mb-8 max-w-2xl mx-auto">
            Explora nuestra colección completa y encuentra la pieza perfecta 
            que refleje tu estilo único y tu amor por lo artesanal.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/tienda" className="btn-primary bg-terracotta-500 hover:bg-terracotta-600">
              Explorar Tienda
            </Link>
            <Link to="/contacto" className="btn-secondary border-white text-white hover:bg-white hover:text-petrol-600">
              Contáctanos
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home