const fs = require("fs");

fs.readFile("brochacho.txt", "utf-8", (err, info) => {
    if (err) {
        console.log(err);
    } else {
        console.log(info);
    }
});

fs.readFile("gg.json", "utf-8", (err2, info2) => {
    if (err2) {
        console.log(err2);
    } 

    try {
        const data = JSON.parse(info2)
        console.log(data)
    } catch (errorParse) {
        console.log(errorParse);
    }
});

