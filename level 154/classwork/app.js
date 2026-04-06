import express from "express";

const app = express();

app.use(express.json)

app.use((req, res, next) => {
    console.log({
        meth: req.method,
        url: req.url,
        query: req.query,
        body: req.body
    })

})

app.use("/isWorking", (req, res, next) => {
    console.log(req.url, req.method);
    res.status(200).json([req.url, req.method])

    next()
})

app.listen(3000, () => console.log("Server is running on port 3000"));

console.log(2 + "2")