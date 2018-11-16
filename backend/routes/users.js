const express = require('express');
const router = express.Router();

// import user controller
const userController = require('../controllers/user-controller');


// get all users
router.get('/', userController.index);

// post new user
router.post('/new', userController.createUser);