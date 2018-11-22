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

const getById = (req, res) => {
    User.findById(req.params.id)((err, user) => {
         if(user == null) {
             res.status(404).json({ message : "User not found"});
         } else {
             res.json(user);
         }
    })
}

const destroy = (req, res) => {
    User.findByIdAndDelete(req.params.id, (err, user) => {
        if (!user) {
            res.status(404).json({ Message: 'User not found'});
        } else { 
            res.json(user);
        }
    })
}

// create a new user
const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body)
        // return newly created user
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message})
    }
} 


//============================TEST===================
const test = (req,res)=>{
    res.json({test:'test'})
}
//====================================================
module.exports = { index, createUser, getById, destroy, test }