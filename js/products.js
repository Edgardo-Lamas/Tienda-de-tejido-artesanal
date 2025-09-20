/**
 * HANDYMAN - Products Data
 * Dynamic product loading with real images
 */

// Products database with real images from your collection
const productsData = {
    gorras: [
        {
            id: 'gorra-1',
            name: 'Gorra Artesanal Clásica',
            category: 'Gorras',
            price: '$45.000',
            image: './img/gorras/WhatsApp Image 2025-09-18 at 12.21.33.jpeg',
            description: 'Gorra tejida a mano con fibras naturales, perfecta para el uso diario.',
            badge: 'Más Vendido',
            tiendaNubeUrl: 'https://handyman.mitiendanube.com/productos/gorra-artesanal-clasica'
        },
        {
            id: 'gorra-2',
            name: 'Gorra de Lana Premium',
            category: 'Gorras',
            price: '$52.000',
            image: './img/gorras/WhatsApp Image 2025-09-18 at 12.22.19.jpeg',
            description: 'Diseño moderno con técnicas tradicionales de tejido.',
            badge: 'Nuevo',
            tiendaNubeUrl: 'https://handyman.mitiendanube.com/productos/gorra-lana-premium'
        },
        {
            id: 'gorra-3',
            name: 'Gorra Térmica Patagónica',
            category: 'Gorras',
            price: '$48.000',
            image: './img/gorras/WhatsApp Image 2025-09-18 at 12.23.23.jpeg',
            description: 'Perfecta para climas fríos, tejida con lana de oveja patagónica.',
            badge: 'Edición Limitada',
            tiendaNubeUrl: 'https://handyman.mitiendanube.com/productos/gorra-termica-patagonica'
        }
    ],
    muñecos: [
        {
            id: 'muñeco-1',
            name: 'Muñeco Tradicional Mapuche',
            category: 'Arte Textil',
            price: '$65.000',
            image: './img/muñecos/WhatsApp Image 2025-09-20 at 10.44.36.jpeg',
            description: 'Muñeco artesanal inspirado en la cultura mapuche, hecho a mano.',
            badge: 'Pieza Única',
            tiendaNubeUrl: 'https://handyman.mitiendanube.com/productos/muneco-tradicional-mapuche'
        },
        {
            id: 'muñeco-2',
            name: 'Familia de Muñecos Andinos',
            category: 'Arte Textil',
            price: '$120.000',
            image: './img/muñecos/WhatsApp Image 2025-09-20 at 10.45.08.jpeg',
            description: 'Set de muñecos que representan una familia andina tradicional.',
            badge: 'Set Completo',
            tiendaNubeUrl: 'https://handyman.mitiendanube.com/productos/familia-munecos-andinos'
        },
        {
            id: 'muñeco-3',
            name: 'Muñeco Gaucho Pampeano',
            category: 'Arte Textil',
            price: '$75.000',
            image: './img/muñecos/WhatsApp Image 2025-09-20 at 10.45.42.jpeg',
            description: 'Representación artesanal de un gaucho pampeano con detalles únicos.',
            badge: 'Artesanía Pura',
            tiendaNubeUrl: 'https://handyman.mitiendanube.com/productos/muneco-gaucho-pampeano'
        }
    ],
    sweaters: [
        {
            id: 'sweater-1',
            name: 'Sweater Alpaca Premium',
            category: 'Sweaters',
            price: '$95.000',
            image: './img/sweaters/WhatsApp Image 2025-09-20 at 10.45.08.jpeg',
            description: 'Suéter de alpaca 100% natural, suave y abrigado.',
            badge: 'Premium',
            tiendaNubeUrl: 'https://handyman.mitiendanube.com/productos/sweater-alpaca-premium'
        }
    ]
};

// Featured products for homepage
const featuredProducts = [
    productsData.gorras[0], // Gorra Clásica
    productsData.muñecos[0], // Muñeco Mapuche
    productsData.sweaters[0], // Sweater Alpaca
    productsData.gorras[1], // Gorra Premium
    productsData.muñecos[1], // Familia Muñecos
    productsData.gorras[2]  // Gorra Patagónica
];

// Function to create product card HTML
function createProductCard(product) {
    return `
        <article class="product-card scroll-animate" data-product-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" 
                     alt="${product.name} - ${product.category} HANDYMAN"
                     loading="lazy">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                <div class="product-overlay">
                    <button class="btn-quick-view" data-product-id="${product.id}">
                        Vista Rápida
                    </button>
                </div>
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">${product.price}</span>
                    <a href="${product.tiendaNubeUrl}" 
                       target="_blank" 
                       class="btn btn-primary product-cta"
                       onclick="trackProductClick('${product.name}', '${product.category}')">
                        Ver en Tienda
                    </a>
                </div>
            </div>
        </article>
    `;
}

// Load featured products on homepage
function loadFeaturedProducts() {
    const productsContainer = document.getElementById('featured-products');
    if (!productsContainer) return;

    const productsHTML = featuredProducts.map(product => createProductCard(product)).join('');
    productsContainer.innerHTML = productsHTML;

    // Initialize product interactions after loading
    setTimeout(() => {
        initializeProductInteractions();
    }, 100);
}

// Initialize product interactions
function initializeProductInteractions() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        // Hover effects
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });

        // Quick view functionality
        const quickViewBtn = card.querySelector('.btn-quick-view');
        if (quickViewBtn) {
            quickViewBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const productId = e.target.dataset.productId;
                showProductQuickView(productId);
            });
        }
    });
}

// Quick view modal functionality
function showProductQuickView(productId) {
    // Find product data
    let product = null;
    
    // Search in all categories
    for (const category in productsData) {
        const found = productsData[category].find(p => p.id === productId);
        if (found) {
            product = found;
            break;
        }
    }
    
    if (!product) return;

    // Create modal HTML
    const modalHTML = `
        <div class="modal-overlay" id="quick-view-modal">
            <div class="modal-content">
                <button class="modal-close" id="close-quick-view">&times;</button>
                <div class="modal-body">
                    <div class="modal-image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="modal-info">
                        <span class="product-category">${product.category}</span>
                        <h2>${product.name}</h2>
                        <p class="product-description">${product.description}</p>
                        <div class="product-price-large">${product.price}</div>
                        <div class="modal-actions">
                            <a href="${product.tiendaNubeUrl}" 
                               target="_blank" 
                               class="btn btn-primary"
                               onclick="trackProductClick('${product.name}', '${product.category}', 'quick_view')">
                                Comprar en Tienda Nube
                            </a>
                            <button class="btn btn-outline" id="close-modal-btn">
                                Cerrar
                            </button>
                        </div>
                        <div class="product-features">
                            <h4>Características:</h4>
                            <ul>
                                <li>✨ Hecho a mano</li>
                                <li>🧶 Fibras naturales</li>
                                <li>🎨 Diseño único</li>
                                <li>🌿 Producción sustentable</li>
                                <li>📦 Envío a todo el país</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Add modal to page
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Add event listeners
    const modal = document.getElementById('quick-view-modal');
    const closeBtn = document.getElementById('close-quick-view');
    const closeModalBtn = document.getElementById('close-modal-btn');
    
    const closeModal = () => {
        modal.remove();
        document.body.style.overflow = '';
    };

    closeBtn.addEventListener('click', closeModal);
    closeModalBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    
    // Track event
    trackProductClick(product.name, product.category, 'quick_view');
}

// Analytics tracking function
function trackProductClick(productName, category, action = 'click') {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'product_interaction', {
            'event_category': 'Products',
            'event_label': productName,
            'product_category': category,
            'action': action
        });
    }
    
    console.log('Product interaction tracked:', {
        product: productName,
        category: category,
        action: action
    });
}

// Category page product loading
function loadProductsByCategory(category) {
    const productsContainer = document.getElementById('products-container');
    if (!productsContainer || !productsData[category]) return;

    const categoryProducts = productsData[category];
    const productsHTML = categoryProducts.map(product => createProductCard(product)).join('');
    productsContainer.innerHTML = productsHTML;

    // Initialize interactions
    setTimeout(() => {
        initializeProductInteractions();
    }, 100);
}

// Search functionality
function searchProducts(query) {
    const allProducts = [];
    
    // Combine all products from all categories
    for (const category in productsData) {
        allProducts.push(...productsData[category]);
    }
    
    // Filter by query
    const filteredProducts = allProducts.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
    );
    
    return filteredProducts;
}

// Initialize products when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadFeaturedProducts();
    
    // Initialize search functionality if search input exists
    const searchInput = document.getElementById('product-search');
    if (searchInput) {
        searchInput.addEventListener('input', debounce((e) => {
            const query = e.target.value.trim();
            if (query.length >= 2) {
                const results = searchProducts(query);
                displaySearchResults(results);
            } else {
                clearSearchResults();
            }
        }, 300));
    }
});

// Display search results
function displaySearchResults(results) {
    const resultsContainer = document.getElementById('search-results');
    if (!resultsContainer) return;
    
    if (results.length === 0) {
        resultsContainer.innerHTML = '<p class="no-results">No se encontraron productos.</p>';
        return;
    }
    
    const resultsHTML = results.map(product => createProductCard(product)).join('');
    resultsContainer.innerHTML = resultsHTML;
    
    setTimeout(() => {
        initializeProductInteractions();
    }, 100);
}

function clearSearchResults() {
    const resultsContainer = document.getElementById('search-results');
    if (resultsContainer) {
        resultsContainer.innerHTML = '';
    }
}

// Export functions for use in other scripts
window.HandymanProducts = {
    loadFeaturedProducts,
    loadProductsByCategory,
    searchProducts,
    createProductCard,
    showProductQuickView,
    trackProductClick
};

console.log('HANDYMAN Products module loaded! 🛍️');