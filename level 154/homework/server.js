const express = require("express");
const requestCounter = require("./middleware/requestCounter");
const app = express();
app.use(requestCounter);

app.get("/", (req, res) => {
    res.send("Home page");
});

app.get("/about", (req, res) => {
    res.send("About page");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});