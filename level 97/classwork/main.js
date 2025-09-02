// 1
const namesArr = ["Gio", "David", "Lizi", "Nika", "Sandro"];
namesArr.forEach(element => {
    console.log(`Hello ${element}!`)
});

// 2
const priceArr = [10, 20, 33, 84, 93, 100];

const newArr = priceArr.map(gel => gel * 0.9);

console.log(newArr);

// 3
const emailArr = ["alex.morgan92@example.com", "sophie_williams07@testmail.com", "daniel.lee88@webmail.net", "chris.johnson54@myinbox.org"];
const updated = emailArr.map(email => email.split("@")[0]);
console.log(updated);