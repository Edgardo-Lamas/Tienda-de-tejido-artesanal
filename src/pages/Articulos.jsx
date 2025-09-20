import React from 'react'
import { blogPosts } from '../data/blogPosts'
import { Calendar, Clock, User, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Articulos = () => {
  const categories = ['tutorial', 'cultura', 'guia', 'reflexion']

  const getCategoryName = (category) => {
    const names = {
      'tutorial': 'Tutoriales',
      'cultura': 'Cultura',
      'guia': 'Guías',
      'reflexion': 'Reflexiones'
    }
    return names[category] || category
  }

  const getCategoryColor = (category) => {
    const colors = {
      'tutorial': 'bg-blue-100 text-blue-700',
      'cultura': 'bg-purple-100 text-purple-700',
      'guia': 'bg-green-100 text-green-700',
      'reflexion': 'bg-yellow-100 text-yellow-700'
    }
    return colors[category] || 'bg-gray-100 text-gray-700'
  }

  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-br from-cream-100 to-sage-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-terracotta-100 text-terracotta-700 rounded-full text-sm font-medium mb-6">
              Blog HANDYMAN
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8">
              Artículos y <span className="text-gradient">Recursos</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Explora nuestros artículos sobre técnicas de tejido, historia artesanal, 
              cuidado de prendas y reflexiones sobre el mundo del slow fashion.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          {/* Featured Article */}
          {blogPosts.filter(post => post.featured)[0] && (
            <div className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">
                  Artículo Destacado
                </h2>
              </div>
              
              {(() => {
                const featuredPost = blogPosts.filter(post => post.featured)[0]
                return (
                  <div className="card overflow-hidden group">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
                        <img 
                          src={featuredPost.image}
                          alt={featuredPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(featuredPost.category)}`}>
                            {getCategoryName(featuredPost.category)}
                          </span>
                          {featuredPost.tags.slice(0, 2).map((tag, index) => (
                            <span key={index} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <h3 className="text-2xl lg:text-3xl font-serif font-bold text-gray-900 mb-4">
                          {featuredPost.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {featuredPost.excerpt}
                        </p>
                        
                        <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                          <div className="flex items-center space-x-2">
                            <User className="w-4 h-4" />
                            <span>{featuredPost.author}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(featuredPost.publishDate).toLocaleDateString('es-AR')}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4" />
                            <span>{featuredPost.readTime}</span>
                          </div>
                        </div>
                        
                        <button className="btn-primary flex items-center space-x-2 group/btn self-start">
                          <span>Leer Artículo</span>
                          <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })()}
            </div>
          )}

          {/* Categories Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <button className="px-4 py-2 bg-terracotta-500 text-white rounded-full text-sm font-medium">
              Todos
            </button>
            {categories.map(category => (
              <button
                key={category}
                className="px-4 py-2 bg-white text-gray-700 hover:bg-gray-100 rounded-full text-sm font-medium transition-colors"
              >
                {getCategoryName(category)}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={post.id} className="card group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                      {getCategoryName(post.category)}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3 group-hover:text-terracotta-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span>{post.author}</span>
                    <div className="flex items-center space-x-3">
                      <span>{new Date(post.publishDate).toLocaleDateString('es-AR')}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full btn-ghost text-terracotta-600 hover:text-terracotta-700 flex items-center justify-center space-x-2 group/btn">
                    <span>Leer más</span>
                    <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-terracotta-500 to-petrol-500 text-white rounded-2xl p-12">
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                ¿No te quieres perder ningún artículo?
              </h3>
              <p className="text-lg text-cream-100 mb-8 max-w-2xl mx-auto">
                Suscríbete a nuestro newsletter y recibe los mejores artículos, 
                tutoriales y consejos sobre el mundo artesanal directo en tu email.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-cream-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button className="px-6 py-3 bg-white text-terracotta-600 hover:bg-cream-100 font-medium rounded-lg transition-colors duration-300">
                  Suscribirme
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Articulos