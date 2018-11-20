var mongoose = require('mongoose');
var path = require('path'); //added
var fs = require('fs'); //added

mongoose.Promise = global.Promise;

mongoose.connect(process.env.DATABASE_URL);

mongoose.connection.once('open', function () {
    console.log('Mongoose connected');
})

//added=================================
//create a variable that points to the path where all the models live
var models_path = path.join(__dirname, './../models'); 
fs.readdirSync(models_path).forEach(function(file) {
    if(file.indexOf('.js') >= 0) {
      // require the file (this runs the model file which registers the schema)
      require(models_path + '/' + file);
    }
  });
//======================================
module.exports = mongoose;