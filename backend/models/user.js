// User schema

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var bcrypt = require('bcryptjs');

var userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    pokemon: {
        type: String,
        required: false
    }
});

var User = mongoose.model('user', userSchema);

module.exports = { User, userSchema };