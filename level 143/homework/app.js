const process = require("process");
const os = require("os");

console.log(process.memoryUsage)
console.log(process.argv);

const info = {
    os: os.type(),
}