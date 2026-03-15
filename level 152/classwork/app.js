import express from "express"; 

const app = express()
app.use(express.json())

const products = [
    {
        id: 0, 
        name: "apple",
        price: 2,
        category: "a",
    },
    {
        id: 1, 
        name: "banana",
        price: 3,
        category: "b",
    },
    {
        id: 3, 
        name: "pineapple",
        price: 5,
        category: "c",
    },
    {
        id: 4, 
        name: "orange",
        price: 4,
        category: "d",
    },
    {
        id: 5, 
        name: "plum",
        price: 3,
        category: "e",
    },
    {
        id: 6, 
        name: "mandarin",
        price: 2,
        category: "f",
    },
    {
        id: 7, 
        name: "pear",
        price: 1,
        category: "g",
    },
    {
        id: 8, 
        name: "peach",
        price: 1,
        category: "h",
    },
    {
        id: 9, 
        name: "watermelon",
        price: 10,
        category: "i",
    },
    {
        id: 10, 
        name: "melon",
        price: 9,
        category: "j",
    }
];


app.get("/products", (req, res) => {

    const {category} = req.query;

    if(category){
        products = products.filter(products => products.category === category);
    }
    return res.status(200).json(products)
})


app.listen(3000, () => console.log("server is running on port 3000"));