// 1
let a = 15;
let b = 12;

if (a > 10 && b > 10) {
    console.log("numbers are greater than 10");
}

// 2
let x = 8;
let y = 15;

if (x > 10 || y > 10) {
    console.log("they're greater");
}

// 3
let ItisRaining = false;

if (!isRaining) {
    console.log("It's not raining.");
}

// 4
let score = 85;
let passed = true;

if ((score > 80 && passed) || !passed) {
    console.log("mett");
}

// 5
let num = 18934234923;
let str = String(num);
console.log(str);        
console.log(typeof str); 

// 6
let bool = true;
let strBool = String(bool);
console.log(strBool);        
console.log(typeof strBool); 

// 7
let strNum = "38298";
let numValue = Number(strNum);
console.log(numValue);        
console.log(typeof numValue); 

// 8
console.log(Number(true));  
console.log(Number(false)); 

// 9
let invalidNum = Number("hello");
console.log(invalidNum);       
console.log(typeof invalidNum);

// 10
let num2 = Number(prompt("Enter a number:"));

if (num > 0) {
    alert("The number is positive.");
} else if (num < 0) {
    alert("The number is negative.");
} else {
    alert("The number is zero.");
}

// 11
let age = Number(prompt("Enter your age:"));

if (age >= 18) {
    alert("You can vote!");
} else {
    alert("You can not");
}

// 12
let num11 = Number(prompt("Enter the first number:"));
let num22 = Number(prompt("Enter the second number:"));

if (num1 > num2) {
    alert("The first number is biger.");
} else if (num2 > num1) {
    alert("The second number is bigger.");
} else {
    alert("Both numbers are equal.");
}