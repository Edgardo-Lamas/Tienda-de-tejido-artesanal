import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      image: '/img/hero/hero-1.jpg',
      title: 'Tejidos con Alma',
      subtitle: 'Cada punto cuenta una historia de tradición y amor artesanal',
      cta: 'Descubrir Colección',
      ctaLink: '/tienda',
      overlay: 'bg-black/40'
    },
    {
      id: 2,
      image: '/img/hero/hero-2.jpg',
      title: 'Calidad Natural',
      subtitle: 'Fibras seleccionadas y técnicas ancestrales en cada prenda',
      cta: 'Ver Productos',
      ctaLink: '/tienda',
      overlay: 'bg-petrol-900/50'
    },
    {
      id: 3,
      image: '/img/hero/hero-3.jpg',
      title: 'Slow Fashion',
      subtitle: 'Moda consciente que perdura en el tiempo y en tu corazón',
      cta: 'Nuestra Historia',
      ctaLink: '/sobre-nosotros',
      overlay: 'bg-terracotta-900/60'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 
            index < currentSlide ? '-translate-x-full' : 'translate-x-full'
          }`}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Overlay */}
            <div className={`absolute inset-0 ${slide.overlay}`} />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-center text-center">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto text-white">
                <h1 className={`text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight transform transition-all duration-1000 delay-300 ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}>
                  {slide.title}
                </h1>
                
                <p className={`text-lg md:text-xl lg:text-2xl mb-10 text-cream-100 font-light leading-relaxed transform transition-all duration-1000 delay-500 ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}>
                  {slide.subtitle}
                </p>

                <div className={`transform transition-all duration-1000 delay-700 ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}>
                  <a 
                    href={slide.ctaLink}
                    className="inline-flex items-center space-x-3 bg-terracotta-500 hover:bg-terracotta-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                  >
                    <span>{slide.cta}</span>
                    <Play className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform duration-300" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        aria-label="Siguiente slide"
      >
        <ChevronRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 text-white animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
          <span className="text-xs font-medium tracking-wider">SCROLL</span>
        </div>
      </div>
    </section>
  )
}

export default Hero