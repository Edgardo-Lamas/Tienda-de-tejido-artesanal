import React from 'react'

const Arte = () => {
  const artworks = [
    {
      id: 1,
      title: "Texturas Patagónicas",
      description: "Serie fotográfica que captura la esencia de las fibras naturales en su estado más puro.",
      image: "/img/pinturas/texturas-patagonicas.jpg",
      artist: "María Handyman",
      year: "2024",
      technique: "Fotografía Digital"
    },
    {
      id: 2,
      title: "El Alma del Tejido",
      description: "Pintura al óleo inspirada en los movimientos repetitivos y meditativos del tejido a mano.",
      image: "/img/pinturas/alma-tejido.jpg",
      artist: "Carlos Artesano",
      year: "2023",
      technique: "Óleo sobre lienzo"
    },
    // Add more artworks as needed
  ]

  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-br from-cream-100 to-sage-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8">
              Arte e <span className="text-gradient">Inspiración</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              La intersección entre el tejido y las artes visuales. Exploramos la belleza 
              de las fibras, los colores y las texturas a través del arte contemporáneo.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artworks.map(artwork => (
              <div key={artwork.id} className="card group">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={artwork.image} 
                    alt={artwork.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">
                    {artwork.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{artwork.description}</p>
                  <div className="text-sm text-gray-500 space-y-1">
                    <div>Artista: {artwork.artist}</div>
                    <div>Año: {artwork.year}</div>
                    <div>Técnica: {artwork.technique}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Arte