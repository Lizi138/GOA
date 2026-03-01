const http = require("http");
const queryString = require("querystring");

const server = http.createServer((req, res) => {

    const url = new URL("http://localhost:3000" + req.url)
    console.log(JSON.stringify(queryString.parse(url.search)))
})

server.listen(3000, () => console.log("Hello, its running on 3000"));