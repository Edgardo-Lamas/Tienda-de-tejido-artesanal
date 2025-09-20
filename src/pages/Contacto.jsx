import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, User, MessageCircle } from 'lucide-react'

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    newsletter: false
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-br from-cream-100 to-sage-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-terracotta-100 text-terracotta-700 rounded-full text-sm font-medium mb-6">
              Contacto
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8">
              Conectemos <span className="text-gradient">juntos</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              ¿Tienes alguna pregunta sobre nuestros productos? ¿Quieres conocer más sobre 
              nuestro proceso artesanal? Estamos aquí para ayudarte.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">
                Información de contacto
              </h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-terracotta-100 text-terracotta-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">hola@handyman.com.ar</p>
                    <p className="text-sm text-gray-500">Respondemos en 24 horas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-petrol-100 text-petrol-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Teléfono</h3>
                    <p className="text-gray-600">+54 11 5555-1234</p>
                    <p className="text-sm text-gray-500">Lun-Vie 9:00-18:00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sage-100 text-sage-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Ubicación</h3>
                    <p className="text-gray-600">Buenos Aires, Argentina</p>
                    <p className="text-sm text-gray-500">Envíos a todo el país</p>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white rounded-xl p-8 shadow-card">
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-6">
                  Preguntas frecuentes
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">¿Cuánto tiempo toma hacer una prenda?</h4>
                    <p className="text-sm text-gray-600">Dependiendo de la complejidad, entre 1-3 semanas.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">¿Hacen prendas personalizadas?</h4>
                    <p className="text-sm text-gray-600">Sí, ofrecemos servicio de tejido personalizado.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">¿Cómo cuido mi prenda de lana?</h4>
                    <p className="text-sm text-gray-600">Incluimos instrucciones de cuidado con cada producto.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-card">
                <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-8">
                  Envíanos un mensaje
                </h2>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre completo *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
                        placeholder="Tu nombre"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Asunto
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
                    >
                      <option value="">Selecciona un asunto</option>
                      <option value="consulta-producto">Consulta sobre producto</option>
                      <option value="pedido-personalizado">Pedido personalizado</option>
                      <option value="cuidado-prenda">Cuidado de prenda</option>
                      <option value="colaboracion">Colaboración</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje *
                    </label>
                    <div className="relative">
                      <MessageCircle className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:border-transparent resize-none"
                        placeholder="Cuéntanos cómo podemos ayudarte..."
                      />
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="newsletter"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 text-terracotta-600 border-gray-300 rounded focus:ring-terracotta-500"
                    />
                    <label htmlFor="newsletter" className="text-sm text-gray-600">
                      Quiero suscribirme al newsletter para recibir novedades y promociones exclusivas
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center space-x-2 group"
                  >
                    <Send className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span>Enviar mensaje</span>
                  </button>
                </div>

                <p className="text-xs text-gray-500 mt-4 text-center">
                  Al enviar este formulario, aceptas que nos pongamos en contacto contigo 
                  para responder a tu consulta.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-terracotta-600 to-petrol-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            ¿Prefieres las redes sociales?
          </h2>
          <p className="text-lg text-cream-100 mb-8 max-w-2xl mx-auto">
            También puedes seguirnos en nuestras redes sociales para estar 
            al día con las últimas creaciones y noticias del mundo artesanal.
          </p>
          <div className="flex justify-center space-x-6">
            {[
              { name: 'Instagram', href: '#', icon: '📷' },
              { name: 'Facebook', href: '#', icon: '📘' },
              { name: 'WhatsApp', href: '#', icon: '💬' }
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="flex flex-col items-center space-y-2 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300"
              >
                <div className="text-2xl">{social.icon}</div>
                <span className="text-sm font-medium">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contacto