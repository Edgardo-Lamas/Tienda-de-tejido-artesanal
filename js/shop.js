/**
 * HANDYMAN - Shop Page JavaScript
 * Filtering, search, and category management
 */

let allProducts = [];
let filteredProducts = [];
let currentCategory = 'all';
let currentPage = 1;
const productsPerPage = 12;

// Initialize shop page
document.addEventListener('DOMContentLoaded', function() {
    if (!window.location.pathname.includes('tienda.html')) return;
    
    loadAllProducts();
    initializeFilters();
    initializeTabs();
    initializeSearch();
    
    console.log('Shop page initialized! 🛒');
});

// Load all products from all categories
function loadAllProducts() {
    allProducts = [];
    
    // Get products from the global products data
    if (typeof window.HandymanProducts !== 'undefined') {
        // Use the existing products data
        for (const category in productsData) {
            allProducts.push(...productsData[category]);
        }
    } else {
        // Fallback products data if main products.js isn't loaded
        allProducts = [
            {
                id: 'gorra-1',
                name: 'Gorra Artesanal Clásica',
                category: 'gorras',
                price: '$45.000',
                priceValue: 45000,
                image: '../img/gorras/WhatsApp Image 2025-09-18 at 12.21.33.jpeg',
                description: 'Gorra tejida a mano con fibras naturales, perfecta para el uso diario.',
                badge: 'Más Vendido',
                tiendaNubeUrl: 'https://handyman.mitiendanube.com/productos/gorra-artesanal-clasica'
            },
            {
                id: 'gorra-2',
                name: 'Gorra de Lana Premium',
                category: 'gorras',
                price: '$52.000',
                priceValue: 52000,
                image: '../img/gorras/WhatsApp Image 2025-09-18 at 12.22.19.jpeg',
                description: 'Diseño moderno con técnicas tradicionales de tejido.',
                badge: 'Nuevo',
                tiendaNubeUrl: 'https://handyman.mitiendanube.com/productos/gorra-lana-premium'
            },
            {
                id: 'muneco-1',
                name: 'Muñeco Tradicional Mapuche',
                category: 'muñecos',
                price: '$65.000',
                priceValue: 65000,
                image: '../img/muñecos/WhatsApp Image 2025-09-20 at 10.44.36.jpeg',
                description: 'Muñeco artesanal inspirado en la cultura mapuche, hecho a mano.',
                badge: 'Pieza Única',
                tiendaNubeUrl: 'https://handyman.mitiendanube.com/productos/muneco-tradicional-mapuche'
            }
        ];
    }
    
    filteredProducts = [...allProducts];
    displayProducts();
    updateProductCount();
}

// Display products with pagination
function displayProducts() {
    const container = document.getElementById('products-container');
    const noProductsDiv = document.getElementById('no-products');
    
    if (!container) return;
    
    if (filteredProducts.length === 0) {
        container.style.display = 'none';
        noProductsDiv.style.display = 'block';
        return;
    }
    
    container.style.display = 'grid';
    noProductsDiv.style.display = 'none';
    
    // Calculate pagination
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToShow = filteredProducts.slice(0, endIndex);
    
    // Create HTML for products
    const productsHTML = productsToShow.map(product => createShopProductCard(product)).join('');
    container.innerHTML = productsHTML;
    
    // Show/hide load more button
    const loadMoreBtn = document.getElementById('load-more');
    if (loadMoreBtn) {
        loadMoreBtn.style.display = endIndex >= filteredProducts.length ? 'none' : 'block';
    }
    
    // Initialize product interactions
    setTimeout(() => {
        initializeProductCards();
    }, 100);
}

// Create product card HTML for shop page
function createShopProductCard(product) {
    const categoryDisplay = getCategoryDisplay(product.category);
    
    return `
        <article class="product-card scroll-animate" data-product-id="${product.id}" data-category="${product.category}" data-price="${product.priceValue || 0}">
            <div class="product-image">
                <img src="${product.image}" 
                     alt="${product.name} - ${categoryDisplay} HANDYMAN"
                     loading="lazy"
                     onerror="this.src='../img/placeholder-product.jpg'">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                <div class="product-overlay">
                    <button class="btn-quick-view" data-product-id="${product.id}">
                        Vista Rápida
                    </button>
                </div>
            </div>
            <div class="product-info">
                <span class="product-category">${categoryDisplay}</span>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">${product.price}</span>
                    <a href="${product.tiendaNubeUrl}" 
                       target="_blank" 
                       class="btn btn-primary product-cta"
                       onclick="trackProductClick('${product.name}', '${categoryDisplay}', 'shop_page')">
                        Ver en Tienda
                    </a>
                </div>
            </div>
        </article>
    `;
}

// Get category display name
function getCategoryDisplay(category) {
    const categoryMap = {
        'gorras': 'Gorras',
        'sweaters': 'Sweaters',
        'muñecos': 'Arte Textil',
        'ponchos': 'Ponchos',
        'pinturas': 'Pinturas'
    };
    return categoryMap[category] || category;
}

// Initialize filter functionality
function initializeFilters() {
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');
    const clearFiltersBtn = document.getElementById('clear-filters');
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', applyFilters);
    }
    
    if (priceFilter) {
        priceFilter.addEventListener('change', applyFilters);
    }
    
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', clearAllFilters);
    }
}

// Apply filters
function applyFilters() {
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');
    
    let filtered = [...allProducts];
    
    // Category filter
    if (categoryFilter && categoryFilter.value !== 'all') {
        filtered = filtered.filter(product => product.category === categoryFilter.value);
    }
    
    // Price filter
    if (priceFilter && priceFilter.value !== 'all') {
        const priceValue = priceFilter.value;
        filtered = filtered.filter(product => {
            const price = product.priceValue || parseInt(product.price.replace(/[^\d]/g, ''));
            
            switch (priceValue) {
                case 'low':
                    return price <= 50000;
                case 'medium':
                    return price > 50000 && price <= 80000;
                case 'high':
                    return price > 80000;
                default:
                    return true;
            }
        });
    }
    
    filteredProducts = filtered;
    currentPage = 1;
    displayProducts();
    updateProductCount();
}

// Clear all filters
function clearAllFilters() {
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');
    const searchInput = document.getElementById('product-search');
    
    if (categoryFilter) categoryFilter.value = 'all';
    if (priceFilter) priceFilter.value = 'all';
    if (searchInput) searchInput.value = '';
    
    // Clear active tab
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => tab.classList.remove('active'));
    document.querySelector('.tab-btn[data-category="all"]')?.classList.add('active');
    
    filteredProducts = [...allProducts];
    currentCategory = 'all';
    currentPage = 1;
    displayProducts();
    updateProductCount();
    
    // Hide search results
    const searchResults = document.getElementById('search-results');
    if (searchResults) {
        searchResults.style.display = 'none';
    }
}

// Initialize category tabs
function initializeTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Filter by category
            const category = tab.dataset.category;
            currentCategory = category;
            
            if (category === 'all') {
                filteredProducts = [...allProducts];
            } else {
                filteredProducts = allProducts.filter(product => product.category === category);
            }
            
            currentPage = 1;
            displayProducts();
            updateProductCount();
            
            // Update category filter select
            const categoryFilter = document.getElementById('category-filter');
            if (categoryFilter) {
                categoryFilter.value = category;
            }
        });
    });
}

// Initialize search functionality
function initializeSearch() {
    const searchInput = document.getElementById('product-search');
    const searchResults = document.getElementById('search-results');
    const productsContainer = document.getElementById('products-container');
    const resetSearchBtn = document.getElementById('reset-search');
    
    if (!searchInput) return;
    
    searchInput.addEventListener('input', debounce((e) => {
        const query = e.target.value.trim();
        
        if (query.length >= 2) {
            const results = searchProducts(query);
            displaySearchResults(results);
        } else {
            hideSearchResults();
        }
    }, 300));
    
    if (resetSearchBtn) {
        resetSearchBtn.addEventListener('click', () => {
            searchInput.value = '';
            hideSearchResults();
            clearAllFilters();
        });
    }
    
    function displaySearchResults(results) {
        if (!searchResults || !productsContainer) return;
        
        productsContainer.style.display = 'none';
        searchResults.style.display = 'grid';
        
        if (results.length === 0) {
            searchResults.innerHTML = `
                <div class="no-results">
                    <h3>No se encontraron productos</h3>
                    <p>Prueba con otros términos de búsqueda</p>
                </div>
            `;
        } else {
            const resultsHTML = results.map(product => createShopProductCard(product)).join('');
            searchResults.innerHTML = resultsHTML;
            
            setTimeout(() => {
                initializeProductCards();
            }, 100);
        }
    }
    
    function hideSearchResults() {
        if (!searchResults || !productsContainer) return;
        
        searchResults.style.display = 'none';
        productsContainer.style.display = 'grid';
    }
}

// Search products function
function searchProducts(query) {
    return allProducts.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        getCategoryDisplay(product.category).toLowerCase().includes(query.toLowerCase())
    );
}

// Initialize product card interactions
function initializeProductCards() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        // Remove existing listeners
        const newCard = card.cloneNode(true);
        card.parentNode.replaceChild(newCard, card);
        
        // Add new listeners
        newCard.addEventListener('mouseenter', () => {
            newCard.style.transform = 'translateY(-8px)';
        });
        
        newCard.addEventListener('mouseleave', () => {
            newCard.style.transform = 'translateY(0)';
        });

        // Quick view functionality
        const quickViewBtn = newCard.querySelector('.btn-quick-view');
        if (quickViewBtn) {
            quickViewBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const productId = e.target.dataset.productId;
                if (typeof showProductQuickView === 'function') {
                    showProductQuickView(productId);
                }
            });
        }
        
        // Product click tracking
        const productLink = newCard.querySelector('.product-cta');
        if (productLink) {
            productLink.addEventListener('click', () => {
                const productName = newCard.querySelector('.product-title')?.textContent;
                const category = newCard.dataset.category;
                trackProductClick(productName, getCategoryDisplay(category), 'shop_page_cta');
            });
        }
    });
}

// Load more products
function loadMore() {
    currentPage++;
    displayProducts();
}

// Initialize load more functionality
document.addEventListener('DOMContentLoaded', () => {
    const loadMoreBtn = document.getElementById('load-more');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMore);
    }
});

// Update product count display
function updateProductCount() {
    // You could add a product count display here
    console.log(`Showing ${Math.min(currentPage * productsPerPage, filteredProducts.length)} of ${filteredProducts.length} products`);
}

// Utility function for debouncing
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Analytics tracking
function trackProductClick(productName, category, source) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'product_click', {
            'event_category': 'Shop',
            'event_label': productName,
            'product_category': category,
            'click_source': source
        });
    }
    
    console.log('Product click tracked:', {
        product: productName,
        category: category,
        source: source
    });
}

// Export functions for global use
window.ShopPage = {
    loadAllProducts,
    applyFilters,
    clearAllFilters,
    searchProducts,
    loadMore
};

console.log('Shop page JavaScript loaded! 🏪');