document.getElementById("alertBtn").addEventListener("click", function () {
    alert("Button was clicked!");
});

let hoverText = document.getElementById("hoverText");
    hoverText.addEventListener("mouseover", function () {
        hoverText.textContent = "Text changed on hover!";
});

let colorBox = document.getElementById("colorBox");
    colorBox.addEventListener("click", function () {
        colorBox.style.backgroundColor = "lightblue";
});

let textInput = document.getElementById("textInput");
    textInput.addEventListener("click", function () {
        console.log("Input value is:", textInput.value);
});

const toggleBtn = document.getElementById("toggleBtn");
    const image = document.getElementById("toggleImage");
    toggleBtn.addEventListener("click", function () {
    if (image.style.display === "none") {
        image.style.display = "block";
    } else {
        image.style.display = "none";
    }
});