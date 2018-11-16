const express = require('express');
const router = express.Router();

// import user controller
const userController = require('../controllers/user-controller');


// get all users
router.get('/', userController.index);
router.get('/userid/:id', userController.getById)

router.delete('/:id', userController.destroy);

// post new user
router.post('/new', userController.createUser);

module.exports = router;