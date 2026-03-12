import express from "express"

const app = express();

app.use(express.json());
const arr1 = ["apple", "banana", "pineapple", "watermelon", "pear"]

app.get("/info", (req, res) => {
    res.status(200).json(arr1);
})

app.post("/info", (req, res) => {
    arr1.push(req.body)
    res.status(200).json(arr1);
})

app.listen(3000, () => console.log("server is running on port 3000"));