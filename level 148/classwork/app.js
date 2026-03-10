const http = require("http");

const arr01 = [
    {
        id: 67,
        name: "Lizi",
        surname: "Mchedlidze",
        age: 12,
        country: "Georgia"
    },

    {
        id: 67,
        name: "Lizi",
        surname: "Mchedlidze",
        age: 12,
        country: "Georgia"
    },

    {
        id: 67,
        name: "Lizi",
        surname: "Mchedlidze",
        age: 12,
        country: "Georgia"
    }
]

const server = http.createServer((req, res) => {
    const mainMethod = req.method

    switch (mainMethod) {
        case "GET":
            res.statusCode = 200;
            res.end(JSON.stringify(arr01));
        case "POST":
            res.statusCode = 200;
            res.end(req.body);
        case "PUT":
            res.statusCode = 200;
            res.end("Mchedlidze Lizi");
        case "DELETE":
            res.statusCode = 200;
            res.end([]);
    }
})

server.listen(3000, () => console.log("server is running on port 3000"));