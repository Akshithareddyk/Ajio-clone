// Women's clothing product data
const womenProducts = [
    { id: 1, name: "Saree", price: 1999, category: "Saree", image: "Images/saree.png" },
    { id: 2, name: "Shirt", price: 899, category: "Shirts", image: "Images/shirtwomen.png" },
    { id: 3, name: "T-Shirt", price: 499, category: "T-Shirts", image: "Images/tshirtwomen.png" },
    { id: 4, name: "Trousers", price: 1299, category: "Trousers", image: "Images/trouser.png" },
    { id: 5, name: "Jeans", price: 1499, category: "Jeans", image: "Images/jeanswomen.png" },
    { id: 6, name: "Top", price: 699, category: "Tops", image: "Images/top.png" },
    { id: 7, name: "Kurti", price: 1199, category: "Kurtis", image: "Images/kurti.png" },
    { id: 8, name: "Leggings", price: 599, category: "Leggings", image: "Images/leggins.png" },
    { id: 9, name: "Kurta Set", price: 1799, category: "Kurta Set", image: "Images/kurthiset.png" },
    // Add more women's products as needed
];

// Function to generate product cards for women’s clothing
function displayWomenProducts(productsToDisplay) {
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
            </div>
        `;
        grid.appendChild(productCard);
    });
}

// Display all women’s products on page load
displayWomenProducts(womenProducts);

// Filter functionality for women’s clothing
function applyWomenFilters() {
    const selectedCategory = document.querySelector('.filters a.active')?.getAttribute('data-filter');
    const maxPrice = document.getElementById('price-range').value;

    let filteredProducts = womenProducts;

    if (selectedCategory) {
        filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
    }

    filteredProducts = filteredProducts.filter(product => product.price <= maxPrice);

    displayWomenProducts(filteredProducts);
}

// Add category filtering for women’s clothing
document.querySelectorAll('.filters a').forEach(filterLink => {
    filterLink.addEventListener('click', event => {
        // Remove active class from all links
        document.querySelectorAll('.filters a').forEach(link => link.classList.remove('active'));
        // Add active class to the clicked link
        event.target.classList.add('active');
        applyWomenFilters();  // Apply filters when category is selected
    });
});

// Price range filter for women’s clothing
const priceRange = document.getElementById('price-range');
const priceDisplay = document.getElementById('price-display');
priceRange.addEventListener('input', () => {
    priceDisplay.innerText = `₹500 - ₹${priceRange.value}`;
    applyWomenFilters();  // Apply filters when price range is adjusted
});
