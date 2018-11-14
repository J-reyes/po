require('dotenv').load();
require('./config/db');

var cors = require('cors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');


// Database logger
var mongomorgan = require('mongo-morgan');


// User auth modules
var fs = require('fs');

// Routers
var userRouter = require('./routes/users');


var app = express();
app.use(logger('short'));
app.use(mongomorgan('mongodb://localhost:3000/', 'dev'));

// Cors implementation
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.user(cookieParser());
app.user(express.static(path.join(__dirname, 'public')));

// API Routes
app.use('/users', userRouter);

module.exports = app;