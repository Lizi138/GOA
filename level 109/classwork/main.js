// // 1
// const asFunc = async (str) => {
//     if(str.length === 2%0){
//         return "even"
//     } else {
//         return "odd"
//     }
// }

// asFunc("Hello It's Lizi")
//     .then((res) => {
//         console.log(res)
//     })


// 2
const myFunc = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(num < 10){
                resolve("resolved")
            } else {
                reject("rejected")
            }
        }, 2000)
    })
}

const func = async () => {
    const res1 = await myFunc(20)
    .then((vl) => vl)
    .catch((er) => er)

    console.log(res1)
}

func()