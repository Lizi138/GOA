const workingOnPromise = (str => {
    new Promise((res, rej) => {
        setTimeout(() => {
            if (str.lenght > 5){
                res("Resolved");
            } else {
                rej("Rejected");
            }
            
        }, 2000)
    })
    .then(res => console.log(res))
    .catch(rej => console.log(rej))
})

workingOnPromise("Hello");
workingOnPromise("Georgia");
workingOnPromise("Programming");


const retPromise = () => {
    return new Promise((res, rej) => {
        res("Resolved")
    })
}

const p1 = retPromise()
const p2 = retPromise()
const p3 = retPromise()

Promise.all([p1, p2, p3])
    .then((o) => {
        console.log(o)
    })
