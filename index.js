const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const apiRoute = require("./route");

const port = 3000 || process.env.PORT;

const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use("/", apiRoute)


app.listen(port, () => {
    console.log("Server started");
})



