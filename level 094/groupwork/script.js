document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
        const name = button.dataset.name;
        const price = parseInt(button.dataset.price);
        const img = button.dataset.img;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find(item => item.name === name);
    if (existing) {
    ;
    } else {
        cart.push({ name, price, img, quantity:1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${name} დაემატა კალათაში!`);
    });
});


function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({name, price});
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} დაემატა კალათაში!`);
}