import express from "express";
import readFile from "./utils/readFile.js";

const app = express();

const DB = "./DataBase/books.json";

app.get("/books", async (req, res) => {
        const books = await readFile(DB);
        res.status(200).json(books);
});

app.get("/books/:id", async (req, res) => {
        const id = Number(req.params.id);

        const books = await readFile(DB);

        const foundBook = books.filter(eng => eng.id === id);

        if (foundBook.length === 0){
            return res.status(404).send("User not found!");
        }

        res.status(200).json(foundBook[0]);
    }
);

app.listen(3000, () => console.log("server is running on port 3000"));