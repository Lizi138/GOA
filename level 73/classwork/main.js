let count = 0;
let interval1 = setInterval(function() {
    console.log("ლიზი");
    count++;
    if (count === 4) {
        clearInterval(interval1);
    }
}, 4000);


const myList = ["ლიზი", 12, true, {city: "Tbilisi"}];
console.log(myList);
console.log(myList[1]);


function myArray(array1) {
    for (let i=0; i<array1.length; i++) {
        console.log(array1[i]);
    }
}

myArray(["Lizi", 4, false, {age: "12" }]);