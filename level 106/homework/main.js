function createPromise2(num1) {
    return new Promise((reslove, reject) => {
        if (num1 %2 === 0){
            reslove("resolve");
        } else {
            reject("reject");
        }
    })
}

const successHandler = s => {
    console.log(s);
}

const failureHandler = s => {
    console.log(s);
}

createPromise2(20).then(successHandler, failureHandler)