const productName = document.getElementById('product-name');
const productQuantity = document.getElementById('product-quantity');
const productContainer = document.getElementById('product-container');

const addProductToLocal = () => {
    const product = productName.value;
    const quantity = productQuantity.value;
    productName.value = '';
    productQuantity.value = '';

    showProductToUi(product, quantity);
    savedProductToLocal(product, quantity);
}

const showProductToUi = (product, quantity) => {
    const div = document.createElement('div');
    div.classList = 'flex justify-around p-4 text-xl rounded-lg bg-slate-300 mb-4 text-center'
    div.innerHTML = `
    <p class="w-64 text-left">${product}</p>
    <p class="w-64 text-end">${quantity}</p>`

    productContainer.appendChild(div);
}

const getStoredShoppingCart = () => {
    let cart = {};
    const storedcart = localStorage.getItem('cart');

    if (storedcart) {
        cart = JSON.parse(storedcart)
    }
    return cart;
}

const savedProductToLocal = (product, quantity) => {
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);

    localStorage.setItem('cart', cartStringified);
}

const showProductLocalToUi = () => {
    const savedCart = getStoredShoppingCart();

    for (const product in savedCart) {
        const quantity = savedCart[product];
        console.log(product, quantity)
        showProductToUi(product, quantity);
    }
}

showProductLocalToUi();