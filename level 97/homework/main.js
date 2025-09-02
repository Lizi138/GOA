// 1
const numsArr = [82, 94, 38, 91, 83, 44, 21];
console.log(numsArr.some(num => num<0));

// 2
const strArr = ["class", "teacher", "pupil", "student"];
console.log(strArr.some(str => str[-1] < 10))

// 3
const ages = [12, 44, 32, 63];
console.log(ages.some(qwe => qwe[-1] < 18))

// 4
const divArr = [14, 54, 33, 30];
console.log(divArr.some(num1 => num1%5 === 0));

// 5
const nameObj = [
    { name: "Lizi", isActive: true },
    { name: "Nuca", isActive: false},
    { name: "David", isActive: true},
    { name: "Gio", isActive: false},
];

console.log(nameObj.some(obj => obj.isActive === true))

// 6
const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
myArr.forEach((elem) => {
    console.log(elem);
});

// 7
const yourArr = ["apple", "bananana", "melon", "watermelon"];
yourArr.forEach(el1 => {
    console.log(el1.toUpperCase());
});

// 8
const sumArr = [123, 55, 31, 95, 36, 2];
let result = 0;

sumArr.forEach(asd => {
    result +=asd;
});

console.log(result);

// 9
const namesArr = ["Gio", "David", "Lizi", "Nika", "Sandro"];
namesArr.forEach(element => {
    console.log(`Hello ${element}!`);
});

// 10
const oddNums = [13, 55, 73, 21, 43];
oddNums.forEach(element3 => {
    return element3 %2 != 0;
});
console.log(oddNums);

// 11
const greetArr = [1, 2, 3, 4, 5];
const cubedNums = greetArr.map(el => el ** 3);
console.log(cubedNums);

// 12
// ?

// 13
// ?

// 14
const fullNameObj = [
    { name: "Lizi", lastName: "Mchedlidze" },
    { name: "Nuca", lastName: "Vardosanidze"},
    { name: "David", lastName: "Gogua"},
    { name: "Gio", lastName: "Kiknadze"},
];

const concat = fullNameObj.map(names => {
    return names.name + names.lastName;
});
console.log(concat);