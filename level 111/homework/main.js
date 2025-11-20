let num = 7;
let result = num % 2 === 0 ? "Even" : "Odd";
console.log(result);

let a = 10, b = 25;
let greater = a > b ? a : b;
console.log(greater);

let age = 16;
let eligibility = age >= 18 ? "Eligible" : "Not Eligible";
console.log(eligibility); 

let score = 67;
let grade = score >= 50 ? "Pass" : "Fail";
console.log(grade); 

let number = -3;
let status = number > 0 ? "Positive" : number < 0 ? "Negative" : "Zero";
console.log(status); 

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let merged = [...arr1, ...arr2];
console.log(merged); 

let person = { name: "Lizi", age: 15 };
let updatedPerson = { ...person, age: 16 }; 
console.log(person);       
console.log(updatedPerson);

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(2, 4, 6, 8)); 

let student = { name: "Barbare", age: 11, grade: 5, school: "N12" };
let { name, ...rest } = student;

console.log(name);
console.log(rest);
