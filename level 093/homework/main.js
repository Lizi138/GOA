// 1
console.log("Hello".repeat(3));  

// 2
console.log("*".repeat(20));  

// 3
console.log("abc".repeat(4));  

// 4
function repeatWord(word, howMuch) {
    return word.repeat(howMuch);
}
console.log(repeat("Hi", 5));  

// 5
let numberTen = 10; 
console.log("[" + " ".repeat(progress) + "]");

// 6
let sent1 = "The cat chased another cat.";
console.log(sent1.replace("cat", "dog"));

// 7
let bananaStr = "banana";
console.log(bananaStr.replace("a", "o"));

// 8
let space = "Hello World from JS";
console.log(space.replace(" ", "-"));

// 9
let digit = "12345abc678";
console.log(digit.replace("1", "#"));

// 10
let monday = "Monday is a good day";
console.log(monday.replace("day", "night"));

// 11
let str1 = "Hello World from JS";
console.log(str1.replaceAll(" ", "_"));

// 12
let str2 = "cat and cat are friends";
console.log(str2.replaceAll("cat", "dog"));

// 13
let str3 = "My number is 12345";
console.log(str3.replaceAll("12345", "#"));

// 14
let str4 = "Javascript is fun";
console.log(str4.replaceAll("aiiu", "*"))

// 15
let str5 = "www.example.com";
console.log(str5.replaceAll(".", "-"));

// 16
let numArr = [1,2,3,4,5,6,7,8,9,10];
console.log(numArr.slice(0, 4));

// 17
let fruitArr = ["banana", "apple", "mango", "pineapple"];
console.log(fruitArr.slice(-3));

// 18
let cityArr = ["London", "tbilisi", "verona", "paris"];
console.log(cityArr.slice(2, -2));

// 19
let students = ["lizi", "david", "nika", "giorgi", "data"];
console.log(students.slice(-5));

// 20
let letters = ['a','b','c','d','e','f'];
console.log(letters.slice(2, 5));

// 21
let dates = "2025-08-17".split("-");
console.log(dates);

// 22
let nums = "one two three four five".split("");
console.log(nums);

// 23
let names = "John,Doe,25,Developer".split(",");
console.log(names);

// 24
let abcs = "abc".split("")
console.log(abcs);

// 25