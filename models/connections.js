const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//connecting to mongodb

mongoose.connect('mongodb://localhost:27017/costcityDB', {useNewUrlParser: true});


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

const UserInfoSchema = new Schema ({
    username: String,
    name: String,
    email: String,
    password: String,
    captainshopper: {type: Boolean, default: false},
    accountcreated: {type: Date, default: Date.now},
    messages: [],
    groups: [],
    usershoppinglist: [],
    finalshoppinglist: [],
    shoppingnow: {type: Boolean, default: false},
    userpaymentinfo: String,
})

const User = mongoose.model('User', UserInfoSchema);
module.exports = User


const testuser = new User({ 

    username: "testperson",
    name: "jimmy",
    email: "dontforgettoredgex@gmail",
    password: "123",
    membershipowner: false,
    messages: ['hello', 'this is coool'],
    friends: [],
    groups: [],
    shoppinglist: [],
    shoppingnow: false,

});
testuser.save().then(() => console.log(testuser));