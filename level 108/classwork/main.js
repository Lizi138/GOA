// 1
const myFunc = (str) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(str.length === 2%0){
                resolve(`resolved: ${str}`);
            } else {
                reject(`reject: ${str}`);
            }
        }, 2000)
    })
}

const p1 = myFunc("Lizi");
const p2 = myFunc("Mchedlidze");
const p3 = myFunc("coder");

Promise.all([p1, p2, p3])
    .then((s) => {
        console.log("resolve:", s);
    })
    .catch((z) => {
        console.log("reject:", z);
    });



// 2
fetch('https://goa-api.onrender.com/mentors/Data Tezelashvili')
    .then(goa => goa.json())
    .then(json => console.log(json));