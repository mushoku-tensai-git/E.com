// Search Functionality
import { products } from '../../src/data/products.js';

function searchProducts(query) {
  if (!query.trim()) return [];
  
  const searchTerm = query.toLowerCase().trim();
  return products.filter(product => 
    product.name.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm)
  );
}

function renderSearchResults(results) {
  const searchResults = document.getElementById('searchResults');
  if (!searchResults) return;
  
  if (results.length === 0) {
    searchResults.innerHTML = '<p class="no-results">No products found</p>';
    return;
  }
  
  searchResults.innerHTML = results.slice(0, 5).map(product => `
    <a href="/products/${product.id}" class="search-result-item">
      <img src="${product.image}" alt="${product.name}" />
      <div class="search-result-info">
        <h4>${product.name}</h4>
        <p class="price">$${product.price.toFixed(2)}</p>
      </div>
    </a>
  `).join('');
}

function initSearchFunctionality() {
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;
  
  let debounceTimer;
  
  searchInput.addEventListener('input', (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const results = searchProducts(e.target.value);
      renderSearchResults(results);
    }, 300);
  });
}

document.addEventListener('DOMContentLoaded', initSearchFunctionality);

window.addToCart = typeof addToCart !== 'undefined' ? addToCart : function(product) {
  console.log('Add to cart:', product);
};

window.showToast = typeof showToast !== 'undefined' ? showToast : function(msg) {
  console.log('Toast:', msg);
};
