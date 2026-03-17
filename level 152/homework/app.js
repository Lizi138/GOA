import express from "express";

const app = express();
app.use(express.json());

app.get("/books", (req, res) => {
    const { price, category, limit, sort } = req.query;
    let books = [
        { title: "Book 1", price: 10, category: "fiction"},
        { title: "Book 2", price: 20, category: "science"},
        { title: "Book 3", price: 15, category: "fiction"},
        { title: "Book 4", price: 25, category: "history"},
    ];

    if(price){
        books = books.filter(book => book.price <= Number(price));
    }

    if(category){
        books = books.filter(book => book.category === category);
    }

    if (sort === "asc") {
        books.sort((a, b) => a.price - b.price);
    } else if (sort === "desc") {
        books.sort((a, b) => b.price - a.price);
    };

    if(books.limit){
        if(Number(books.limit) < 0) {
            books = [];
        }

        books = books.slice(0, Number(books.limit));
}});

app.listen(3000, () => console.log("server is running on port 3000"))