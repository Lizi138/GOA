// const process = require("process");

// process.stdin.on("data", (favCol, film) => {
//     console.log(favCol.toString());
//     process.stdout.write("enter favourite color: \n");
//     console.log(film.toString());
//     process.stdout.write("enter favourite film: \n");
// })

// process.stdout.write("enter favourite color: \n");
// process.stdout.write("enter favourite film: \n");

const process = require("process")
const { Buffer } = require("buffer");
const buf = Buffer.alloc(4, "Lizi");
const buf2 = Buffer.from("Lizi");
const allBuf = Buffer.concat([buf, buf2]).toString();
process.stdout.write(allBuf)