// კლასში გავაკეთეთ ცოტა გამირთულდა

const asyncFunc = async () => {
    try {
        const l1 = await fetch("jsonplaceholder.com")
        const d1 = await l1.json();
        console.log(d1)
    } catch (error) {
        console.log({err: error})
    }
}

asyncFunc()