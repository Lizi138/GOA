const fs = require("fs/promises");

async function txt2() {
    try {
        const dataInfo = await fs.readFile("brochacho.txt", "utf-8");
        console.log(dataInfo);
    } catch (error) {
        console.log(error);
    }
}

txt2();

