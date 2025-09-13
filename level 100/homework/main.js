function randomDecimal() {
    return Math.random();
}

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function flipCoin() {
    return Math.random() < 0.5;
}

function generatePassword() {
    const chars = "abcdefghijklmnopqrstuvwxyzABC";
    let password = "";
    for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    return password;
}

function randomBoolean() {
    return Math.random() < 0.5;
}

console.log(Math.trunc(99.67)); 

console.log(Math.trunc(-0.67)); 
console.log(Math.floor(-7.887)); 


let randomNum = Math.random() * 100;
console.log(randomNum);
console.log(Math.trunc(randomNum));

let str = "34.89";
console.log(Math.trunc(num)); 

let arr = [3.92, 7.74, -0.5, 0.9];
let truncatedArr = arr.map(x => Math.trunc(x));
console.log(truncatedArr); 
