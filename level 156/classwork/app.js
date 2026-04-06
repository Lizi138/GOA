import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

let myArr = [
    {
        id: 0,
        name: "Lizi",
        age: 9929203
    },
    {
        id: 0,
        name: "david",
        age: 67
    },
    {
        id: 0,
        name: "data",
        age: 999
    }
];

app.get("/products", (req, res) => {
    res.status(200).json(myArr)
});

app.get("/products/:id", (req, res) => {
    const param = Number(req.params.id);
    const obj = myArr.filter(product => product.id === id)[0]
    res.status(200).json(myArr)
});


app.listen(process.env.PORT, () => console.log(`server is running on port ${process.env.PORT}`));