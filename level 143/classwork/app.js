// const os = require("os");

// const serv = {
//     operatSystem: os.type(),
//     net: os.networkInterfaces(),
//     uptime1: os.uptime(),
//     uptime2: os.uptime() /3600
// }

// console.log(serv)

const events = require("events");
const myEm = new events.EventEmitter();

const func = info => {
    console.log(`hi bro ${info}`);
}

myEm.on("log", func)
func.emit("log", "Lizi Mchedlidze");