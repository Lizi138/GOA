// function ranName() {
//     const names = ["Lizi", "David", "GIo", "Dato", "Sandro"];
//     const randI = Math.floor(Math.random() * names.length);
//     const str = names[randI];
//     setTimeout(() => {
//         console.log(str);
//     }, 3000);
// }

// ranName();


// 2
function createPromise(num1) {
    return new Promise((reslove, reject) => {
        if (num1 > 10){
            reslove("resolve");
        } else {
            reject("reject");
        }
    })
}
createPromise(1)
createPromise()