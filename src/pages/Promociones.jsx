import React from 'react'

const Promociones = () => {
  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-br from-cream-100 to-sage-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8">
              E-books y <span className="text-gradient">Promociones</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Descarga gratuitamente nuestros e-books con patrones, guías y técnicas 
              de tejido para llevar el arte artesanal a tu hogar.
            </p>
          </div>
        </div>
      </section>
      
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              E-books Próximamente...
            </h2>
            <p className="text-gray-600">
              Estamos preparando contenido educativo gratuito para la comunidad.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Promociones