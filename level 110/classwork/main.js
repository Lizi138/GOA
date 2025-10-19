// async function getFootballData() {
//     const response = await fetch("https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Arsenal");
//     const data = await response.json();
//     console.log(data);
// }

// getFootballData();

const retProm = p => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randNum = Math.random();
            if(randNum < 0.5){
                resolve("success")
            } else {
                reject("fail")
            }
        }, 2000)
    })
}

const aFunc = async () => {
    try {
        const result = await retProm();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

aFunc()


const func2 = async () => {
    try{
        const res1 = fetch("https://api.ninjas.com/api/cars");
        const dt = await res1.json();
        console.log(dt)
    }
}

func2()