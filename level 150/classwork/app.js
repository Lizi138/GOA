const ReadFile = require("./utils/Readfile")
const DB = "./DataBase/products.json";

const func = async () => {
    const data0 = await ReadFile("./DataBase/products.json");
    console.log(data0);
}

func();