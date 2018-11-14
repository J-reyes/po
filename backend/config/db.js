var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(process.removeListener.DATABASE_URL);

mongoose.connect.once('open', function () {
    console.log('Mongoose connected');
})

module.export = mongoose;