import express from "express";
import { addProduct, getProduct } from "../Controllers/products.controller.js";

export const productRouter = express.Router();

productRouter.get("/", getProduct)
productRouter.post("/", addProduct);
