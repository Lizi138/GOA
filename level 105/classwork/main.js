// 1
const exec = (resolve, reject) => {
    const name = "Data"

    if (name.length > 4){
        resolve("resolve");
    } else {
        reject("rejected");
    }
}
const newProm = new Promise(exec);
console.log(newProm)


// 2
for (let a=1; a<=5;a++){
    setTimeout(() => {
        console.log(a);
    }, 1000*a);
};

// 3
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task complete");
    }, 3000);
});