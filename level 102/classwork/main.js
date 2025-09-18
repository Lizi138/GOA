// 1
let p = document.getElementById("main-p");
let button = document.getElementById("btn-1");

button.addEventListener("click", function(){
    const d = new Date();
    p.textContent = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}, ${d.getHours()}-${d.getMinutes()}-${d.getSeconds()}`
});

// 2
const myObj = {
    name: "Lizi",
    lastName: "Mchedlidze",
    age: 12,
    isMentor: false,
    color: "White",
}

console.log(myObj);
console.log(myObj.name);
console.log(myObj.lastName);
console.log(myObj.age);
console.log(myObj.isMentor);
console.log(myObj.color);