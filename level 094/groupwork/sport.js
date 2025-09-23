let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const buttons = document.querySelectorAll(".add-to-cart");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const name = button.getAttribute("data-name");
            const price = button.getAttribute("data-price");

        cart.push({ name, price });
        localStorage.setItem("cart", JSON.stringify(cart));

        alert(`${name} კალათაში დამატებულია ✅`);
        });
        });

        
