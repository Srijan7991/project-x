let cart = [];
let totalPrice = 0;

function addToCart(productName, price) {
    // Add product to cart
    cart.push({ name: productName, price: price });

    // Update the cart display
    displayCart();
}

function displayCart() {
    const cartItems = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('total-price');

    // Clear previous items
    cartItems.innerHTML = '';
    totalPrice = 0;

    // Add items to the cart display
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
        totalPrice += item.price;
    });

    // Update total price
    totalDisplay.textContent = `Total: $${totalPrice}`;
}
