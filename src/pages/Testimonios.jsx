import React from 'react'
import { testimonials } from '../data/testimonials'
import { Star, Quote } from 'lucide-react'

const Testimonios = () => {
  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-br from-cream-100 to-sage-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-terracotta-100 text-terracotta-700 rounded-full text-sm font-medium mb-6">
              Testimonios
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8">
              Lo que dicen nuestros <span className="text-gradient">clientes</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              La satisfacción de nuestros clientes es nuestro mayor logro. 
              Aquí están sus palabras sobre la experiencia HANDYMAN.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="card text-center group">
                <div className="p-8">
                  <Quote className="w-8 h-8 text-terracotta-300 mx-auto mb-6" />
                  
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 italic mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                    <img
                      src={testimonial.photo}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    {testimonial.location}
                  </p>
                  <p className="text-xs text-terracotta-600 font-medium">
                    {testimonial.product}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Testimonios