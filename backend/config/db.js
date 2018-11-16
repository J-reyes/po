var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.DATABASE_URL);

mongoose.connection.once('open', function () {
    console.log('Mongoose connected');
})

module.exports = mongoose;