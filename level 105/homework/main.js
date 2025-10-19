function say() {
    setTimeout(() => {
        console.log("Hello after 2 seconds");
    }, 2000);
}
say();


setTimeout(() => {
    console.log("secundo");
}, 1000);

setTimeout(() => {
    console.log("zdarova");
}, 3000);


setTimeout(() => {
    console.log("ola");
    setTimeout(() => {
        console.log("sasa");
    setTimeout(() => {
        console.log("Hello");
        }, 2000);
    }, 2000);
}, 2000);


function qwe(start) {
    for (let i = start; i > 0; i--) {
        setTimeout(() => {
            console.log(i);
    }, (start - i) * 1000);
    }
}
qwe(5);


