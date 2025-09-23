// 1
let p = document.getElementById("main-p");

p.onclick = function(){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.body.style.textAlign = "center";
}

// 2
let btn = document.getElementById("main-button");
button.addEventListener("click", function(e) {
    console.log(e);
    e.target.style.backgroundColor = "black";
});
