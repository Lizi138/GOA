// 1
const strArr = ["banana", "apple", "pineapple", "lemon"];
console.log(strArr.find(str => str[0] === 'a'));

// 2
const perObj = [
    { name: "Lizi", age: 12},
    { name: "Lizi", age: 45},
];
console.log(perObj.find(obj => obj.age > 30));

// 3
const words = ["notebook", "book", "pencil"];
console.log(words.find(qwe => qwe.length > 5));

// 4
const productsObj = [
    { name: "milk", price: 10},
    { name: "hat", price: 60},
];
console.log(productsObj.find(pro => pro.price < 20));

// 5
const studentObj = [
    { name: "jack", grade: "A"},
    { name: "Marck", grade: "F"},
];
console.log(studentObj.find(asd => asd.grade === "A"));

// 6
const numbers = [1, 2, 3, 44, 82, 91];
console.log(numbers.findIndex(num => num < 0));

// 7
const wordsArr = ["Car", "motorcycle", "bus", "airplane"];
console.log(wordsArr.findIndex(wrd => wrd.slice(-3) === "ing"));

// 8
const mmasObj = [
    { name: "liza", isActive: true},
    { name: "David", isActive: false},
];
console.log(mmasObj.findIndex(s => s.isActive === true));

// 9
const numbersArr = [20, 42, 14, 90, 100];
console.log(numbersArr.findIndex(ert => ert%10 === 0));

// 10
const fruits = ["watermelon", "melon", "banana", "apple"];
console.log(fruits.findIndex(a => a.length === 5));

// 11
const numsArr = [300, 12, 43, 13, 49, 311];
console.log(numsArr.findLast(d => d > 50));

// 12
const words1 = ["georgia", "italy", "france", "germany"];
console.log(words1.findLast(c => c[0] === "S"));

// 13
const obj2 = [
    { name: "giorgi", isActive: false},
    { name: "salome", isActive: false},
];
console.log(obj2.findLast(gg => gg.isActive === true));

// 14
const nums = [93, 44, 13, 53, 100, 45];
console.log(nums.findLast(we => we%3 === 0));

// 15
const country = ["georgia", "italy", "france", "germany"];
console.log(country.findLast(cou => cou.length === 4));

// 16
const nums1 = [33, 134, 94, 35, 100, 86];
console.log(nums1.indexOf(25));

// 17
const fruits1 = ["watermelon", "melon", "banana", "apple"];
console.log(fruits1.indexOf("apple"));

// 18
const coding = ["b", "m", "a", "f"];
console.log(coding.indexOf("a"));

// 19
const animals = ["dog", "tiger", "lion", "cat", "girrafe"];
console.log(animals.indexOf("cat"));

// 20
const randomNums = [12, 99, 34, 55, 848, 4];
console.log(randomNums.indexOf(100));

// 21
const randomNums1 = [12, 99, 34, 55, 848, 4, 10];
console.log(randomNums1.lastIndexOf(10));

// 22
const fruitsMas = ["watermelon", "melon", "apple", "banana"];
console.log(fruitsMas.lastIndexOf("apple"));

// 23
const char = ["abc", "bca", "cab", "acb"];
console.log(char.lastIndexOf("a"));

// 24
const animalsArr = ["tiger", "lion", "cat", "dog", "girrafe"]
console.log(animalsArr.lastIndexOf("dog"));

// 25
const negativeNumbers = [22, -2, 94, 12, -93];
console.log(negativeNumbers.lastIndexOf(0));

// 26
const nums2 = [14, 53, 31, 49, 990];
const removed = nums2.pop();
console.log(nums2);
console.log(removed);

// 27
const fruits3 = ["melon", "orange", "apple", "banana"];
console.log(fruits3.pop());
console.log(fruits3)

// 28
const arr = ["a", "b", "c", "d", "e", "f"];
for (let i=arr.length; i > 0; i--){
    arr.pop();
};

console.log(arr);

// 29
const obj4 = [
    { name: "giorgi", age: 33},
    { name: "deme", age: 13},
];
console.log(obj4.pop());
console.log(obj4);

// 30
const array = [32, 84, 63, 67, 84, 3];
const removed2 = array.pop()
console.log(array);
console.log(removed2);

// 31
const numbersArray = [22, 83, 8, 90];
console.log(numbersArray.splice(0, 2));

// 32
const index = ["melon", "orange", "apple", "banana"];
console.log(index.splice(2, 0, "orange", "grape"));
console.log(index);

// 33
const index2 = ["grape", "melon", "banana"];
console.log(index2.splice(3, 1, "mango"));
console.log(index2);

// 34
const index3 = ["grape", "melon", "banana", "mango"];
console.log(index3.splice(-3, 3));
console.log(index3);

// 35
const noDelete = ["run", "walk", "write", "cry", "reading"];
console.log(noDelete.splice(2, 0, "smile"));
console.log(noDelete);