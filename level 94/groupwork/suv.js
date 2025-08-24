let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " დაემატა კალათაში!");
}

// კალათის ჩვენება cart.html-ზე
if (document.getElementById("cart-items")) {
    const container = document.getElementById("cart-items");

    function renderCart() {
        container.innerHTML = "";
        cart.forEach((item, index) => {
            const div = document.createElement("div");
            div.classList.add("cart-item");
            div.innerHTML = `
        <p>${item.name} - $${item.price}</p>
        <button onclick="removeFromCart(${index})">წაშლა</button>
        `;
        container.appendChild(div);
    });
    }

    renderCart();

    document.getElementById("checkout").addEventListener("click", () => {
        if (cart.length === 0) {
        alert("კალათა ცარიელია!");
    } else {
        alert("გადახდილია!");
        cart = [];
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
    }
    });
}

