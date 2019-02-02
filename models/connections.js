const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//connecting to mongodb

// mongoose.connect('mongodb://localhost:27017/costcityDB', {useNewUrlParser: true});
mongoose.connect('mongodb://localhost:27017/mongoProjectTest', {useNewUrlParser: true});


mongoose.connection.once('open', function() {
   console.log("connection to mongodb has been established")
}).on('error', function(error) {
   console.log("connection error:", error)
});