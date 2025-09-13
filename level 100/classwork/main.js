// 1
const btn = document.getElementById("btn1");
const p = document.getElementById("p1");

btn.addEventListener("click", () => {
    const colors = ["red", "blue", "green", "purple"];
    const randomFunc = Math.floor(Math.random() * colors.length);
    p.style.color = colors[randomFunc];
});


// 2
const p2 = document.getElementsByTagName("p");
for (let para of p2){
    p.textContent = "Level 100, Goa Best";
};

// 3
const randomFruit = ['apple', 'banana', 'cherry'];
const chooseRandomFruit = f => {
    const randomI = Math.floor(Math.random() * f.length);
    return f[randomI];
}

console.log(chooseRandomFruit(randomFruit))