import React, { useState } from 'react'
import { products, categories } from '../data/products'
import ProductCard from '../components/ProductCard'
import { Filter, Search, Grid, List, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'

const TiendaNube = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('name')
  const [viewMode, setViewMode] = useState('grid')
  const [showFilters, setShowFilters] = useState(false)

  // Filter products based on category and search term
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name)
      case 'price-low':
        return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''))
      case 'price-high':
        return parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, ''))
      case 'featured':
        return b.featured - a.featured
      default:
        return 0
    }
  })

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    setShowFilters(false)
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-cream-100 via-sage-50 to-petrol-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-terracotta-100 text-terracotta-700 rounded-full text-sm font-medium mb-6">
              Nuestra Colección
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-8">
              Tienda <span className="text-gradient">HANDYMAN</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Descubre nuestra colección completa de prendas artesanales. 
              Cada producto te llevará directamente a nuestra tienda en Tienda Nube 
              para una experiencia de compra segura y confiable.
            </p>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 inline-block">
              <p className="text-sm text-gray-600 mb-2">🛍️ Compras seguras en</p>
              <div className="text-lg font-bold text-terracotta-600">Tienda Nube</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-20 z-40">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
              />
            </div>

            {/* Filters Toggle (Mobile) */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center space-x-2 px-4 py-3 bg-gray-100 rounded-lg"
            >
              <Filter className="w-4 h-4" />
              <span>Filtros</span>
              <ChevronDown className={`w-4 h-4 transform transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>

            {/* Desktop Filters */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Category Filter */}
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-500" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta-500"
                >
                  <option value="all">Todas las categorías</option>
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta-500"
              >
                <option value="name">Ordenar por nombre</option>
                <option value="price-low">Precio: menor a mayor</option>
                <option value="price-high">Precio: mayor a menor</option>
                <option value="featured">Destacados primero</option>
              </select>

              {/* View Mode */}
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow-sm' : ''}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow-sm' : ''}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Filters Panel */}
          {showFilters && (
            <div className="lg:hidden mt-4 p-4 bg-gray-50 rounded-lg space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Categoría</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta-500"
                >
                  <option value="all">Todas las categorías</option>
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ordenar por</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta-500"
                >
                  <option value="name">Nombre</option>
                  <option value="price-low">Precio: menor a mayor</option>
                  <option value="price-high">Precio: mayor a menor</option>
                  <option value="featured">Destacados primero</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Category Pills */}
      <section className="py-6 bg-cream-50">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-terracotta-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-terracotta-100'
              }`}
            >
              Todos ({products.length})
            </button>
            {categories.map(category => {
              const count = products.filter(p => p.category === category.id).length
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-terracotta-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-terracotta-100'
                  }`}
                >
                  {category.name} ({count})
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Results Info */}
          <div className="flex justify-between items-center mb-8">
            <div className="text-gray-600">
              Mostrando {sortedProducts.length} productos
              {searchTerm && (
                <span> para "{searchTerm}"</span>
              )}
              {selectedCategory !== 'all' && (
                <span> en {categories.find(c => c.id === selectedCategory)?.name}</span>
              )}
            </div>
          </div>

          {/* Products */}
          {sortedProducts.length > 0 ? (
            <div className={
              viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'
                : 'space-y-6'
            }>
              {sortedProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ProductCard 
                    product={product} 
                    featured={product.featured}
                    className={viewMode === 'list' ? 'flex' : ''}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No encontramos productos
              </h3>
              <p className="text-gray-600 mb-6">
                Intenta ajustar tus filtros o términos de búsqueda
              </p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('all')
                }}
                className="btn-secondary"
              >
                Limpiar filtros
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="section-padding bg-gradient-to-r from-petrol-600 to-sage-600 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Compra segura en Tienda Nube
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-terracotta-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Pagos Seguros</h3>
                    <p className="text-cream-100">Múltiples medios de pago y máxima seguridad</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-terracotta-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Envíos a Todo el País</h3>
                    <p className="text-cream-100">Llegamos a cualquier rincón de Argentina</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-terracotta-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Atención Personalizada</h3>
                    <p className="text-cream-100">Soporte directo para todas tus consultas</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-4xl mb-4">🛍️</div>
                <h3 className="text-xl font-semibold mb-4">¿Primera vez comprando?</h3>
                <p className="text-cream-100 mb-6">
                  Conoce más sobre nuestro proceso de compra y políticas de envío
                </p>
                <Link to="/contacto" className="btn-primary bg-terracotta-500 hover:bg-terracotta-600">
                  Consultar Dudas
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TiendaNube