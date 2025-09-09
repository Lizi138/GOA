// 1 reverse
const numsArr = [1, 2, 3, 4, 5];
console.log(numsArr.reverse())

// 2
const fruitArr = ["apple", "pinepple", "orange"]
console.log(fruitArr.reverse());
console.log(fruitArr[0]);

// 3
const name1 = ["o","l","l","e","h"];
console.log(name1.reverse());

// 4
const numsArr2 = [1, 2, 3, 4, 5];
console.log(numsArr2.reverse())

// 5
const java = ["t", "p", "i", "r", "c", "s", "a", "v", "a", "j"];
console.log(java.reverse().join(","))

// 6 shift
const fruitArr2 = ["apple", "pinepple", "orange"];
console.log(fruitArr2.shift())

// 7
const nums = [2, 4, 6, 8, 33, 32, 423];
console.log(nums.shift());
console.log(nums);

// 8
const names = ["lizi", "gio", "davit", "lado"];
console.log(names.shift());

// 9
const nums3 = [33, 4, 5, 6, 7, 892, 0, 3, 2, 1, 4];
console.log(nums3.shift());
console.log(nums3)
console.log(nums3.shift());
console.log(nums3)
console.log(nums3.shift());
console.log(nums3)
console.log(nums3.shift());
console.log(nums3)
console.log(nums3.shift());
console.log(nums3)
console.log(nums3.shift());
console.log(nums3)
console.log(nums3.shift());
console.log(nums3)
console.log(nums3.shift());
console.log(nums3)
console.log(nums3.shift());
console.log(nums3)
console.log(nums3.shift());
console.log(nums3)
console.log(nums3.shift());
console.log(nums3)

// 10
const mixed = ["good", 12, "great", 3, 4];
console.log(mixed.shift());

// 11 join
const fruit = ["apple", "pinepple", "orange"];
console.log(fruit.join())

// 12
const numbers = [123, 42, 53, 65, 7];
console.log(numbers.join(" "));

// 13
const words = ["hello", "i", "am", "Lizi"];
console.log(words.join("-"));

// 14
const char = ["lizi", "nika", "deme"];
console.log(char.join());

// 15
const namesArr = ["kato", "deme", "salo"];
console.log(namesArr.join(" | "));

// 16 abs
console.log(Math.abs(9));
console.log(Math.abs(44));

// 17
console.log(Math.abs(-2));
console.log(Math.abs(-214792138479283479218734));

// 18
const arr = [93, 8, 833];
console.log(Math.abs(93));
console.log(Math.abs(8));
console.log(Math.abs(833));

// 19
console.log(Math.abs(348));
console.log(Math.abs(34));

// 20
console.log(Math.abs(-21));

// 21 round and ceil
console.log(Math.round(4.3));

// 22
console.log(Math.round(-3.5));

// 23
const decimals = [2.4, 5.4, 6.42];
console.log(Math.ceil())

// 24
// ?

// 25
const price = 44.54;       
const tax = 0.9;      
let total1 = price * (1 + tax);
let total = Math.ceil(total1);
console.log(total);

// 26 round floor
console.log(Math.floor(3.444));

// 27
console.log(Math.floor(-2.74));

// 28
const num = [3.4, 72.5, 91.2];
const rounded = Math.floor(num);
console.log(rounded);

// 29
// ?
const price1 = 32.4;
const tax2 = 0.19;
let total2 = price1*(1 + tax2);
let total4 = Math.floor(total2);
console.log(total4);

// 30 max
console.log(Math.max(22, 31));

// 31
console.log(Math.max(132, 41, 83883));

// 32
const few = [32, 57, 94, 3, 554];
const man = num => {
    if (num >= 0) return num
    else return num*-1
};
console.log(few)

// 33
console.log(Math.max(123, 44, 93));

// 34
console.log(Math.max(-32, -99, 1239));

// 35 min
console.log(Math.min(83, 84, 92, 0));

// 36
console.log(Math.min(32, 45, 74));

// 37
// ?

// 38
console.log(Math.min(88, 123, 3939, 2));

// 39
console.log(Math.min(-11, -23, 94, -244))

// 40 pow
console.log(Math.pow(2, 3)); 

// 41
console.log(Math.pow(5, 0.5)); 

// 42
let num3 = 4;
console.log(Math.pow(num, 3)); 

// 43
let base = 7;
let exponent = 2;
console.log(Math.pow(base, exponent)); 

// 44
const numbers5 = [2, 3, 4, 5];
const squared = Math.pow(n, 2);
console.log(squared); 
