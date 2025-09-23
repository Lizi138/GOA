// 1
function usingWhileLoop() {
    let number = 0;
    while (number < 100) {
        console.log(number);
        number = number + 1
    }
}

usingWhileLoop()

// 2
function correctUserPassword() {
    let userPassword = "Welcomd123!";
    let userName = prompt("Enter your password: ");
    let tryes = 0
    while (userPassword !== userName) {
        userName = prompt("enter")
        userName++;
    }
    alert("correct guess. tries:" + tryes)
}

correctUserPassword()

// 3
function printMyName() {
    for (let i = 0; i<10; i++) {
        console.log("Lizi Mchedlidze")
    }
}