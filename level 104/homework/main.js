const person = {
    name: "Lizi",
    age: 12,
    city: "Tbilisi",
    hobby: "drawing",
    grade: 7
};

console.log(Object.keys(person));
console.log(Object.keys(person).length);

function uppercaseKeys(obj) {
    return Object.keys(obj).map(key => key.toUpperCase());
}
console.log(uppercaseKeys(person));

const check = "georgia";
const key1 = Object.keys(person).includes(check);
console.log(key1);

const student = {
    name: "Lizi",
    surname: "Mchedlidze",
    school: "112",
    hobby: "codeing"
};
console.log(Object.keys(student));

const product = {
    name: "Laptop",
    price: 1500,
    inStock: true,
    rating: 10,
    brand: "Lenovo"
};

console.log(Object.values(product));
console.log(Object.values(product).length);

function getNumericValues(obj) {
    return Object.values(obj).filter(value => typeof value === "number");
}
console.log(getNumericValues(product));

const brand1 = "Samsung";
const value2 = Object.values(product).includes(brand1);
console.log(value2);

const scores = {
    math: 20,
    english: 20,
    history: 10,
    science: 20,
    art: 10
};
console.log(Object.entries(scores));

function printEntries(obj) {
    Object.entries(obj).forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
    });
}
printEntries(scores);

const strings = Object.entries(scores).map(([k, v]) => `${k}=${v}`);
console.log(strings);

function filterValuesGreaterThan10(obj) {
    return Object.fromEntries(Object.entries(obj).filter(([_, value]) => value > 10));
}
console.log(filterValuesGreaterThan10(scores));

function swapKeysAndValues(obj) {
    return Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]));
}
console.log(swapKeysAndValues(scores));

const car = {
    brand: "dasdadasd",
    model: "dasds",
    year: 2013
};

console.log(Object.hasOwn(car, "brand"));
console.log(Object.hasOwn(car, "color"));
console.log(Object.hasOwn(car, "toString"));
car.color = "Black";
console.log(Object.hasOwn(car, "color"));
console.log(Object.hasOwn(car, "year"));
