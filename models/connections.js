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


// ====error finder=======
// function emitWarning(uid, reason) { 
//     const warning = new Error( 
//       `Unhandled promise rejection (rejection id: ${uid}): ` + 
//       safeToString(reason)); 
//     warning.name = 'UnhandledPromiseRejectionWarning'; 
//     warning.id = uid; 
//     try { 
//       if (reason instanceof Error) { 
//         warning.stack = reason.stack; 
//       } 
//     } catch (err) {} 
//     process.emitWarning(warning); 
//     if (!deprecationWarned) { 
//       deprecationWarned = true; 
//       process.emitWarning( 
//         'Unhandled promise rejections are deprecated. In the future, ' + 
//         'promise rejections that are not handled will terminate the ' + 
//         'Node.js process with a non-zero exit code.', 
//         'DeprecationWarning', 'DEP0018'); 
//     } 
//   } 

// ==========error finder=======

// if captainshopper user can create group