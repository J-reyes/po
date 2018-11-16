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
    pokemons: [{
        type: Schema.Types.ObjectId, ref: "pokemon"
    }]
});

var User = mongoose.model('user', userSchema);

module.exports = { User, userSchema };