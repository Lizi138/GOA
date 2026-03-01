const {createWriteStream} = require("fs");
const {createInterface} = require("readline")

const hello = createWriteStream("./main.txt");
hello.write("Welcome goa\n")
hello.write("shawarma\n")
hello.write("goabest\n")
hello.write("asdasdasdasddddddddddddddddddddddddddddddddddddddddddd\n");
hello.end();