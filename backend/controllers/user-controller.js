// import user schema from models folder
var { User } = require('../models/user');

// Get all "/users"
const index =  async (req, res) => {
    try {
        let user = await User.find();
        
        // return user
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

// create a new user
const createUser = async (req, res) => {
    try {
        const user = await user.create(req.body)
        // return newly created user
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message})
    }
} 

module.exports = { index, createUser }