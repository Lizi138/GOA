document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.getElementById("cart-items");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function renderCart() {
        cartContainer.innerHTML = "";
        if (cart.length === 0) {
            cartContainer.innerHTML = "<p>კალათა ცარიელია 🛒</p>";
            return;
    }

    cart.forEach((item, index) => {
        const div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = `
            <img src="${item.img}" width="100">
            <h3>${item.name}</h3>
            <p>ფასი: $${item.price}</p>
            <button onclick="removeItem(${index})">წაშლა</button>
        `;
        cartContainer.appendChild(div);
    });
    }

    window.removeItem = function(index) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
    };

    renderCart();

    document.getElementById("checkout").addEventListener("click", () => {
    if (cart.length > 0) {
        alert("გადახდილია!");
        cart = [];
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
    } else {
        alert("კალათა ცარიელია!");
        }
    });
});
