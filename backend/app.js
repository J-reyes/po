require("dotenv").load();
require("./config/db");

var cors = require("cors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

//seems like we arent using this in this file
// var mongoose = require("mongoose"); 

// Database logger
var mongomorgan = require("mongo-morgan");


// User auth modules
// var fs = require("fs");

// Routers
var userRouter = require("./routes/users");
var pokemonRouter = require('./routes/pokemon');


var app = express();

app.use(logger("short"));
app.use(mongomorgan("mongodb://localhost/po", "dev"));


// Cors implementation
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// API Routes
app.use("/users", userRouter);
app.use('/pokemons', pokemonRouter);


//server port
app.listen(8000, () => console.log("================Server listening on port 8000=============="))

module.exports = app;