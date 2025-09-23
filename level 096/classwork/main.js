// 1
const numbers = [13, 15, 12, 90, 55];

const checkNumber = numbers.every((element) => {
    return element % 2 != 0
});

console.log(checkNumber);

// every() მეთოდი ამოწმებს ყველა რიცხვს და აძლევს იმის საშუალებას გაივლის თუ არა ტესტს

// 2
const names = ["Lizi", "Giorgi", "David", "Ia", "Sandro"];

const checkNameLenght = names.every((key) => {
    return key >= 3
});

console.log(checkNameLenght)

// 3

const oddList = [20, 23, 93, 43, 37];
const evenList = [19, 43, 55, 84, 97];

const filtered = oddList.filter((num) => {
    return num % 2 === 0
});

console.log(filtered);

const filtered2 = evenList.filter((num2) => {
    return num2 % 2 !== 0
});

console.log(filtered2);

// 4
const namesList = ["liza", "gio", "sandro", "deme", "david"];

const checkLengh = namesList.find((qwe) => {
    return qwe.length === 4
});

console.log(checkLengh);

// filter() მეთოდი ამოწმებს სიას და ჩვენ მიერ მითითებული ამოცანის შემდეგ გამოაქვს განახლებული სია
// find() მეთოდი ეძებს სიაში ჩვენ მიერ გაწერილი სიტყვას 