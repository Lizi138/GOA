import express from "express";
import { productRouter } from "./Routers/products.route.js";

const app = express();
app.use("/products", productRouter);
app.use(express.json())

app.listen(3000, () => console.log("Server is running on port 3000"));