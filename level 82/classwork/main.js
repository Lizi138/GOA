let me = {
        name: "Lizi",
        age: 12,
        surname: "Mchedlidze"
    }

let printObject = function(obj1) {
    for (let key in obj1) {
        console.log(obj1[key]);
    }
}

printObject(me)

const greet = ((numsArr) =>{
    let qwe = 1;
    for (let item of numsArr) {
        qwe *= item;
    }

    return qwe;
})([3, 9, 1]) 

console.log(greet)

console.log(((str) => {
    let res = ""
        for (let i=str.length - 1; i>=0; i--) {
        res += str[i];
    }
    return res;
}))("Hello")