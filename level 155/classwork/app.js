import express from "express";
import morgan from "morgan";
import bodyparser from "body-parser";
import errorHandler from "errorhandler";

const app = express();

app.use(bodyparser.json());


app.get("/users/:id", (req, res, next) => {
    const throwErr = new Error("user not found");
    throwErr.status = 404;
    return next(throwErr)
})

app.use(errorHandler())

app.use(morgan("common"));
app.listen(3000, () => console.log("server is running on port 3000"));