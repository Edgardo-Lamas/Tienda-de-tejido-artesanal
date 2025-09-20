import React from 'react'

const Historias = () => {
  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-br from-cream-100 to-sage-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8">
              Historias de <span className="text-gradient">Tejido</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Cada prenda tiene una historia. Descubre las tradiciones, técnicas 
              y relatos que dan vida a nuestras creaciones artesanales.
            </p>
          </div>
        </div>
      </section>
      
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              Próximamente...
            </h2>
            <p className="text-gray-600">
              Estamos preparando historias fascinantes sobre el mundo del tejido artesanal.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Historias