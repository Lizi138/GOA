let now = new Date();
console.log(now.getSeconds());
alert(now.getSeconds());

function getSeconds(dateObj) {
    return dateObj.getSeconds();
}
console.log(getSeconds(new Date()));

let d1 = new Date();
let d2 = new Date("2025-09-18T12:30:45");
console.log(d1.getSeconds() === d2.getSeconds());

setInterval(() => {
    let current = new Date();
    console.log(current.getSeconds());
}, 1000);

let nowMonth = new Date();
console.log(nowMonth.getMonth()); 
alert((nowMonth.getMonth() + 1)); 

function getMonthFromDate(dateObj) {
    return dateObj.getMonth() + 1; 
}
console.log(getMonthFromDate(new Date()));

let m1 = new Date();
let m2 = new Date("2025-12-25");
console.log(m1.getMonth() === m2.getMonth());

setInterval(() => {
    let current = new Date();
    console.log(current.getMonth() + 1);
}, 5000);
