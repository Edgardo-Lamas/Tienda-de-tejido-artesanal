import React from 'react'
import { ExternalLink, Heart, Star } from 'lucide-react'

const ProductCard = ({ product, featured = false, className = '' }) => {
  if (!product) return null

  const {
    name,
    price,
    description,
    image,
    linkTiendaNube,
    colors = [],
    sizes = [],
    category
  } = product

  return (
    <div className={`card-elevated group ${featured ? 'ring-2 ring-terracotta-200' : ''} ${className}`}>
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-64 md:h-72 object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex space-x-3">
            <button className="w-10 h-10 bg-white/90 hover:bg-white text-gray-900 rounded-full flex items-center justify-center transition-colors duration-300">
              <Heart className="w-5 h-5" />
            </button>
            <a 
              href={linkTiendaNube}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-terracotta-500 hover:bg-terracotta-600 text-white rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 left-4 bg-terracotta-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
            <Star className="w-3 h-3 fill-current" />
            <span>Destacado</span>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-medium capitalize">
          {category}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        {/* Product Name & Price */}
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-serif font-semibold text-gray-900 group-hover:text-terracotta-600 transition-colors duration-300">
            {name}
          </h3>
          <span className="text-xl font-bold text-terracotta-600 ml-4">
            {price}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* Colors */}
        {colors.length > 0 && (
          <div className="mb-4">
            <span className="text-xs font-medium text-gray-500 mb-2 block">Colores disponibles:</span>
            <div className="flex flex-wrap gap-1">
              {colors.slice(0, 3).map((color, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                >
                  {color}
                </span>
              ))}
              {colors.length > 3 && (
                <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-md">
                  +{colors.length - 3}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Sizes */}
        {sizes.length > 0 && (
          <div className="mb-6">
            <span className="text-xs font-medium text-gray-500 mb-2 block">Talles:</span>
            <div className="flex flex-wrap gap-1">
              {sizes.map((size, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* CTA Button */}
        <a
          href={linkTiendaNube}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full btn-primary flex items-center justify-center space-x-2 group/btn"
        >
          <span>Ver en Tienda</span>
          <ExternalLink className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
    </div>
  )
}

export default ProductCard