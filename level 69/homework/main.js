// 1
let num = parseInt(prompt("Enter a number:"));

if (num % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}

// 2
let score = studentScores(prompt("Enter the score:"));

if (score >= 90) {
    console.log("Grade A");
} else if (score >= 80) {
    console.log("Grade B");
} else if (score >= 70) {
    console.log("Grade C");
} else if (score >= 60) {
    console.log("Grade D");
} else {
    console.log("Fail");
}

// 3
let a = prompt("Enter the first number:");
let b = prompt("Enter the second number:");
let c = prompt("Enter the third number:");

if (a === b && b === c) {
    console.log("All three numbers are equal.");
} else if (a >= b && a >= c) {
    console.log("The largest number is:", a);
} else if (b >= a && b >= c) {
    console.log("The largest number is:", b);
} else {
    console.log("The largest number is:", c);
}

// 4
// ?

// 5
let number1 = prompt("Enter a number:");

if (num % 3 === 0 && num % 5 === 0) {
    console.log("Divisible by both 3 and 5.");
} else if (num % 3 === 0) {
    console.log("Divisible by 3");
} else if (num % 5 === 0) {
    console.log("Divisible by 5");
} else {
    console.log("Not divisible by 5 or 3");
}

// 6
let age = prompt("Enter age:");

if (age >= 0 && age <= 12) {
    console.log("Child");
} else if (age >= 13 && age <= 19) {
    console.log("Teenager");
} else if (age >= 20 && age <= 59) {
    console.log("Adult");
} else if (age >= 60) {
    console.log("Senior");
} else {
    console.log("Invalid age entered.");
}

// 7
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

// 8
let A = 2;
while (A <= 10) {
    console.log(A);
}

// 9
let B = 10;
while (B >= 1) {
    console.log(B);
}

// 10
for (let c = 1; c <= 10; c++) {
    console.log(c);
}

// 11
for (let d = 1; d <= 5; d++) {
    console.log(d * 3);
}

// 12
for (let e = 10; e >= 1; e--) {
    console.log(e);
}

// 13
for (let f = 1; f <= 20; f++) {
    if (f % 2 === 0) {
        console.log(f);
    }
}

// 14
let sum = 0;
for (let g = 1; g <= 5; g++) {
    sum += i;
}
console.log(sum);
