// 1
const namesArr = ["Lizi", "Giorgi", "Deme", "Data", "Mari"];
console.log(namesArr.join(" | "))

// 2
const manualAbsFunc = qwe => {
    if (qwe >= 0) return qwe
    else return qwe* -1
};

console.log(manualAbsFunc(-99))
console.log(manualAbsFunc(-1))
console.log(manualAbsFunc(83))

// 3
console.log(Math.max(-1, -44, -92, -439, -823123123));
