// 1
const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("func", () => {
    console.log("hi");
});

emitter.emit("func");

// 2
emitter.on("google", (txt, num) => {
    console.log(`its message: ${txt}`);
    console.log(`number here: ${num}`);
})

emitter.emit("google", "you have to sign in", 1232385438535);

// 3
const process = require("process");

// ? cant

// 4 esec ver gaavige

// 5
const buffer = Buffer.alloc(4);
buffer.write("ola");
console.log(buffer);
console.log(buffer.toString());

// 6
const txtt = "imlizi";
const buffer2 = Buffer.from(txtt);

console.log(buffer)

// 7
const buffer3 = Buffer.from("halou text");
const gug = buffer3.toString("utf-8");
console.log(gug);

