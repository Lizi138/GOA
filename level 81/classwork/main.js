let num = 1
while (num <= 20) {
    num++
    if (num > 9 && num < 16) {
        continue;
    }
    console.log(num);
}

const isEven = (number) => {
    return number % 2 === 0;
};

console.log(isEven(4));  
console.log(isEven(7));  


function mainFunc(a, b, c, d, e, f, g, h, i, j){
    console.log(arguments)
    for (let item of arguments) {
        console.log(item);
    };
    if (mainFunc === "number") {
        console.log(arguments);
    };
    if (mainFunc === "string") {
        value = 1
        console.log(value);
    };
};

mainFunc(1, "hello", 2, "world", true, 143, "good", 5, "abc", 92);
