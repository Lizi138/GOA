// 1
const numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numsArr.find(el => el > 50));

// 2
console.log(numsArr.findIndex(el => el% 7 === 0));

// 3
const numsArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numsArr.splice(1, 1, 67);

console.log(numsArr);

// 4
const numsArr2 = [74, 223, 48, 93, 13];
const removed = numsArr2.pop();
console.log(numsArr2);
console.log(removed);