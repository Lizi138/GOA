let today = new Date();
let myBirthday = new Date(2025, 4, 15);

console.log(today.getDate());
console.log(myBirthday.getDate());
console.log(today.getDate() === 1);

console.log(today.getDay());
console.log(myBirthday.getDay());
console.log(today.getDay() === 0);

console.log(today.getFullYear());
console.log(myBirthday.getFullYear());
console.log(today.getFullYear() === 2025);

console.log(today.getHours());

let someDate = new Date(2025, 6, 20, 9, 30);
console.log(someDate.getHours());

console.log(today.getHours() < 12);

console.log(today.getMinutes());
console.log(someDate.getMinutes());
console.log(today.getMinutes() === 0);

