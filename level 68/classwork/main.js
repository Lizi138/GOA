// 1
function logicalFunc(bool1, bool2) {
    console.log(bool1 && bool2);
    console.log(bool1 || bool2);
}

logicalFunc(true, true);
logicalFunc(true, false);
logicalFunc(false, false);

// 2
function typeConvert() {
    let num1 = prompt("Enter A Number: ");
    console.log(num1);
    let num = Number(num1);
    console.log(typeof num)
}

typeConvert()

// 3
function forConditions(){
    let userNum = Number(prompt("Enter number:"));

    if (userNum >= 0 && userNum < 18) {
        console.log("not adult");
    } else if (userNum >= 18 && userNum < 65) {
        console.log("adult & not old");
    } else if (userNum >= 65 && userNum < 113) {
        console.log("retired")
    } else {
        console.log("lie")
    }
}