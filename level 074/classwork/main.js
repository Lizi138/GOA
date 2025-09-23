let button = document.getElementById("main-btn");
const colors = ["red", "blue", "green", "yellow"];

let count = 0;

button.addEventListener("click", function(){
    count = 0

    setInterval(function(){
        button.style.backgroundColor = colors[count];
        count++;
    });

    if(changeCount === 5) {
        clearInterval()
    }
}, 2000)

const input = document.getElementById("colorInput");
    const button1 = document.getElementById("changeColorBtn");

    button.addEventListener("click")
        const color = input.value;
        document.body.style.backgroundColor = color;