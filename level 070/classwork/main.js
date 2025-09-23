// 1
let button = document.getElementById('changeColorButton');

function changeButtonColor() {
    let color = prompt("შეიყვანე ფერი");
    button.style.backgroundColor = color;
}

// 2
function submitLogIn() {
    let submit = document.getElementById("submit").value;
    let form = document.getElementById("form1")
    if (sumbit === "true")
        alert("logged in")
}

event.preventDefault()

submitLogIn()

function colorForm(e) {
document.getElementById('colorForm')
        e.preventDefault()

        let textColor = document.getElementById('textColor').value;
        let bgColor = document.getElementById('bgColor').value;

        document.body.style.color = textColor;
        document.body.style.backgroundColor = bgColor;
}