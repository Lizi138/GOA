const http = require("http");

const cars = [
    {
        brand: "bmw",
        price: "$230 000",
        year: 2020
    },
    {
        brand: "bmw",
        price: "$230 000",
        year: 2020
    },
    {
        brand: "bmw",
        price: "$230 000",
        year: 2020
    },
    {
        brand: "bmw",
        price: "$230 000",
        year: 2020
    }
]

function getRequestBody(req) {
    return new Promise((resolve, reject) => {
        let data = '';

        req.on('data', chunk => {
            data += chunk;
        });

        req.on('end', () => {
            resolve(data);
        });

        req.on('error', err => {
            reject(err);
        });
    });
}


const server = http.createServer(async (req, res) => {
    const {method} = req

    switch (method) {
        case "GET":
            return res.end(JSON.stringify(cars))
        case "POST": 
            res.statusCode = 200;
            const func = await getRequestBody(req);
            const value = JSON.parse(func);
            cars.push(value);
            return res.end(JSON.stringify(cars))
    }
})

server.listen(3000, () => console.log("server is running on port 3000"));