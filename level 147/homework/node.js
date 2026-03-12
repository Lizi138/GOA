const http = require("http");
const queryString = require("querystring");

const server = http.createServer((req, res) => {
    const url1 = new URL("http://localhost:3000" + req.url);
    console.log(url1)

    const obj = queryString.parse(url1);
    console.log(obj);

    const str = queryString.stringify(obj);
    console.log(str)

    res.end(JSON.stringify(url1));
});

server.listen(3000, () => console.log("server is running on port 3000"));