import React from 'react'
import { Heart, Award, Users, Leaf } from 'lucide-react'
import { Link } from 'react-router-dom'

const SobreNosotros = () => {
  const timeline = [
    {
      year: '2008',
      title: 'Los Primeros Puntos',
      description: 'Todo comenzó como un hobby familiar. María, nuestra fundadora, empezó tejiendo bufandas para sus seres queridos en su pequeño departamento de Buenos Aires.'
    },
    {
      year: '2012',
      title: 'Creciendo con Pasión',
      description: 'La demanda de nuestros tejidos únicos creció orgánicamente. Amigos y conocidos comenzaron a pedir prendas personalizadas, viendo la calidad excepcional de nuestro trabajo.'
    },
    {
      year: '2015',
      title: 'HANDYMAN Nace Oficialmente',
      description: 'Formalizamos la marca HANDYMAN, estableciendo nuestro primer taller y comenzando a trabajar con una red de artesanos locales comprometidos con la excelencia.'
    },
    {
      year: '2018',
      title: 'Expansión Nacional',
      description: 'Nuestras prendas llegaron a todo el país. Participamos en las principales ferias artesanales y establecimos alianzas con tiendas especializadas en productos únicos.'
    },
    {
      year: '2021',
      title: 'Sostenibilidad y Tradición',
      description: 'Implementamos prácticas 100% sostenibles y comenzamos a documentar técnicas tradicionales de tejido para preservarlas para futuras generaciones.'
    },
    {
      year: '2025',
      title: 'El Futuro Artesanal',
      description: 'Hoy continuamos innovando mientras honramos nuestras raíces, creando prendas que cuentan historias y construyendo un futuro más consciente para la moda.'
    }
  ]

  const team = [
    {
      name: 'María Handyman',
      role: 'Fundadora y Artesana Principal',
      image: '/img/team/maria.jpg',
      description: 'Con más de 20 años de experiencia en tejido, María es el corazón creativo de HANDYMAN.',
      specialties: ['Diseño de Patrones', 'Técnicas Ancestrales', 'Dirección Creativa']
    },
    {
      name: 'Carlos Artesano',
      role: 'Maestro Tejedor',
      image: '/img/team/carlos.jpg',
      description: 'Especialista en fibras patagónicas y técnicas tradicionales transmitidas por generaciones.',
      specialties: ['Fibras Naturales', 'Tejido Tradicional', 'Control de Calidad']
    },
    {
      name: 'Ana Diseñadora',
      role: 'Directora de Diseño',
      image: '/img/team/ana.jpg',
      description: 'Combina la tradición artesanal con tendencias contemporáneas en cada nueva colección.',
      specialties: ['Diseño Contemporáneo', 'Tendencias', 'Innovación']
    }
  ]

  const values = [
    {
      icon: Heart,
      title: 'Pasión',
      description: 'Cada prenda lleva nuestro amor por el arte del tejido',
      color: 'text-terracotta-600 bg-terracotta-50'
    },
    {
      icon: Award,
      title: 'Excelencia',
      description: 'Nunca comprometemos la calidad por la rapidez',
      color: 'text-petrol-600 bg-petrol-50'
    },
    {
      icon: Users,
      title: 'Comunidad',
      description: 'Apoyamos a artesanos locales y sus familias',
      color: 'text-sage-600 bg-sage-50'
    },
    {
      icon: Leaf,
      title: 'Sostenibilidad',
      description: 'Comprometidos con un futuro más verde',
      color: 'text-green-600 bg-green-50'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-cream-100 via-sage-50 to-petrol-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-terracotta-100 text-terracotta-700 rounded-full text-sm font-medium mb-6">
              Nuestra Historia
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-8">
              Somos tejedores de <span className="text-gradient">historias</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              En HANDYMAN no solo creamos prendas, tejemos sueños, preservamos tradiciones 
              y construimos un futuro donde lo artesanal tiene el valor que merece.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/tienda" className="btn-primary">
                Ver Nuestra Colección
              </Link>
              <Link to="/contacto" className="btn-secondary">
                Conoce al Equipo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-8">
                Una historia tejida con dedicación
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  HANDYMAN nació de una simple pero poderosa convicción: que las cosas hechas 
                  con amor y dedicación tienen un valor que trasciende lo material. En un mundo 
                  acelerado por la fast fashion, nosotros elegimos el camino lento, consciente y auténtico.
                </p>
                <p>
                  Desde nuestros humildes comienzos en 2008, hemos crecido sin perder la esencia 
                  que nos define. Cada prenda que creamos lleva consigo no solo la calidad de 
                  las mejores fibras naturales, sino también la historia de las manos que la tejieron 
                  y el amor que se puso en cada punto.
                </p>
                <p>
                  Trabajamos con una red de artesanos locales, preservando técnicas ancestrales 
                  mientras innovamos con diseños contemporáneos. Creemos en el slow fashion, 
                  en la durabilidad sobre la tendencia, y en el valor de lo hecho a mano 
                  en una era de producción masiva.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-hover">
                <img
                  src="/img/about/workshop.jpg"
                  alt="Nuestro taller artesanal"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-card">
                <div className="text-2xl font-serif font-bold text-terracotta-600 mb-2">500+</div>
                <div className="text-sm font-medium text-gray-700">Prendas únicas creadas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              Nuestro viaje a través del tiempo
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Cada año ha sido un hilo más en la gran obra que estamos tejiendo juntos.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-px top-0 bottom-0 w-0.5 bg-terracotta-200"></div>

            {timeline.map((item, index) => (
              <div 
                key={index} 
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 lg:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-terracotta-500 rounded-full border-4 border-white shadow-soft"></div>

                {/* Content */}
                <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'} pl-12 lg:pl-0`}>
                  <div className="bg-white p-8 rounded-xl shadow-card">
                    <div className="text-2xl font-serif font-bold text-terracotta-600 mb-3">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              Los valores que nos guían
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Estos principios son la base de todo lo que hacemos y la razón 
              por la cual nuestros clientes confían en nosotros.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div key={index} className="text-center group">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${value.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              Conoce a nuestro equipo
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Las personas que dan vida a cada creación y mantienen viva 
              la tradición artesanal en cada punto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card text-center group">
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <div className="text-terracotta-600 font-medium mb-4">
                    {member.role}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {member.description}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.specialties.map((specialty, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-terracotta-600 to-petrol-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            ¿Quieres ser parte de nuestra historia?
          </h2>
          <p className="text-lg text-cream-100 mb-8 max-w-2xl mx-auto">
            Cada cliente que elige HANDYMAN se convierte en parte de esta gran familia artesanal. 
            Tu apoyo nos ayuda a preservar tradiciones y crear nuevas historias.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/tienda" className="btn-primary bg-white text-terracotta-600 hover:bg-cream-100">
              Explorar Colección
            </Link>
            <Link to="/contacto" className="btn-secondary border-white text-white hover:bg-white hover:text-terracotta-600">
              Contáctanos
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SobreNosotros