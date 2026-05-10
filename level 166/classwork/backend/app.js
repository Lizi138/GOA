import express from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config();

app.use("/api/status", (req, res, next) => {
    res.status(200).json({status: "server is running" });
});

app.listen(process.env.PORT, () => {console.log(`Server is running on port ${process.env.PORT}`);});