// Sample product data
const products = [
    { id: 1, name: "Nike T-shirt", price: 799, brand: "Nike", category: "Shirts", reviews: 500, image: "Images/shirt.png" },
    { id: 2, name: "Adidas Jacket", price: 1999, brand: "Adidas", category: "Jackets", reviews: 300, image: "Images/jackets.png" },
    { id: 3, name: "Puma Jeans", price: 1299, brand: "Puma", category: "Jeans", reviews: 400, image: "Images/jeans.png" },
    { id: 4, name: "Adidas T-shirt", price: 999, brand: "Adidas", category: "Shirts", reviews: 250, image: "Images/.png" },
    { id: 5, name: "Nike Jacket", price: 2499, brand: "Nike", category: "Jackets", reviews: 150, image: "Images/nikejac.png" },
    { id: 6, name: "Puma T-shirt", price: 899, brand: "Puma", category: "Shirts", reviews: 450, image: "Images/shirt.png" },
    { id: 7, name: "Adidas Jeans", price: 1599, brand: "Adidas", category: "Jeans", reviews: 350, image: "Images/adidasjean.png" },
    { id: 8, name: "Nike Jeans", price: 1799, brand: "Nike", category: "Jeans", reviews: 500, image: "Images/jeans.png" },
    // Add more products as needed
];

// Function to generate product cards
function displayProducts(productsToDisplay) {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = '';  // Clear current products

    productsToDisplay.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-details">
                <h4>${product.name}</h4>
                <p>₹${product.price}</p>
                <p>⭐⭐⭐⭐⭐ (${product.reviews} reviews)</p>
            </div>
        `;
        productCard.addEventListener('click', () => openModal(product));  // Attach event listener
        grid.appendChild(productCard);
    });
}

// Display all products on page load
displayProducts(products);

// Filter functionality
function applyFilters() {
    const selectedCategory = document.querySelector('.filters a.active')?.getAttribute('data-filter');
    const maxPrice = document.getElementById('price-range').value;
    const selectedBrands = Array.from(document.querySelectorAll('.brand-filter:checked')).map(cb => cb.value);

    let filteredProducts = products;

    if (selectedCategory) {
        filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
    }

    if (selectedBrands.length > 0) {
        filteredProducts = filteredProducts.filter(product => selectedBrands.includes(product.brand));
    }

    filteredProducts = filteredProducts.filter(product => product.price <= maxPrice);

    displayProducts(filteredProducts);
}

// Add category filtering
document.querySelectorAll('.filters a').forEach(filterLink => {
    filterLink.addEventListener('click', event => {
        // Remove active class from all links
        document.querySelectorAll('.filters a').forEach(link => link.classList.remove('active'));
        // Add active class to the clicked link
        event.target.classList.add('active');
        applyFilters();  // Apply filters when category is selected
    });
});

// Price range filter
const priceRange = document.getElementById('price-range');
const priceDisplay = document.getElementById('price-display');
priceRange.addEventListener('input', () => {
    priceDisplay.innerText = `₹500 - ₹${priceRange.value}`;
    applyFilters();  // Apply filters when price range is adjusted
});

// Brand filtering
document.querySelectorAll('.brand-filter').forEach(checkbox => {
    checkbox.addEventListener('change', applyFilters);  // Apply filters when a brand is selected/deselected
});

// Modal functionality
const modal = document.getElementById('product-modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalPrice = document.getElementById('modal-price');
const modalReviews = document.getElementById('modal-reviews');

function openModal(product) {
    modal.style.display = 'flex';
    modalImg.src = product.image;
    modalTitle.innerText = product.name;
    modalPrice.innerText = `Price: ₹${product.price}`;
    modalReviews.innerText = `Reviews: ⭐⭐⭐⭐⭐ (${product.reviews})`;
}

document.querySelector('.close').addEventListener('click', () => {
    modal.style.display = 'none';
});
