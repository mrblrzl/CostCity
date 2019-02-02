var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var UserSchema = new Schema({
    email: {type: String},
    password: {type:String},
    role: {type: String, default: "member"},
    token: {type: String},
    username: String,
    // captainshopper: {type: Boolean, default: false},
    // accountcreated: {type: Date, default: Date.now},
    // messages: [],
    // groups: [],
    // usershoppinglist: [],
    // finalshoppinglist: [],
    // shoppingnow: {type: Boolean, default: false},
    // userpaymentinfo: String,
});

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;

// const testuser = new User({ 
//     username: "testperson",
//     name: "jimmy",
//     email: "dontforgettoredgex@gmail",
//     password: "123",
//     membershipowner: false,
//     messages: ['hello', 'this is coool'],
//     friends: [],
//     groups: [],
//     shoppinglist: [],
//     shoppingnow: false,

// });

// testuser.save().then(() => console.log(testuser));