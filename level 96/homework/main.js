const numbers = [2, 4, 6, 8, 10];

const evenNumbers = numbers.every((elem) => {
    return elem % 2 === 0
});

console.log(evenNumbers);

// 2
const students = [
    { name: "Nika", grade: 85 },
    { name: "Ana", grade: 45 },
    { name: "Gio", grade: 70 },
    { name: "Mariam", grade: 30 }
];

const filterMeth = students.filter((preson) => {
    return preson => preson.grade > 50
});

console.log(filterMeth);

// 3
const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Headphones", price: 150 }
];

const checkProduct = products.find((greet) => {
    return greet.price === 800
});

console.log(checkProduct)