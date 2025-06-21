let count = 1;
let interval1 = setInterval(function() {
    console.log(count);
    count++;
    if (count > 5) {
    clearInterval(interval1);
}
}, 1000);


let interval2 = setInterval(function() {
    console.log("Hello");
}, 2000);

setTimeout(function() {
    clearInterval(interval2);
}, 10000);

let colorChangeCount = 0;
let colors = ["red", "orange", "blue", "yellow", "purple"];

let interval3 = setInterval(function() {
    document.body.style.backgroundColor = colors[colorChangeCount];
    colorChangeCount++;
    if (colorChangeCount === 5) {
    clearInterval(interval3);
}
}, 3000);

// ?

let seconds = 0;
let interval5 = setInterval(function() {
    seconds++;
    console.log(seconds);
    if (seconds === 10) {
    clearInterval(interval5);
}
}, 1000);

let numbers = [2, 25, 33, 40];
console.log(numbers[1]); 
numbers[0] = 100;
console.log(numbers);

let fruits = ["orange", "banana", "apple"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

let nums = [5, 1, 93, 233, 3];
let sum = nums[0] + nums[4];
console.log(sum); 
