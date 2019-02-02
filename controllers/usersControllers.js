const db = require("../models");

// Defining methods for the itemssController
module.exports = {
 findAll: function(req, res) {
   db.User
     .find(req.query)
     .sort({ date: -1 })
     .then(dbModel => res.json(dbModel))
     .catch(err => res.status(422).json(err));
 },
 findById: function(req, res) {
   db.User
     .findById(req.params.id)
     .then(dbModel => res.json(dbModel))
     .catch(err => res.status(422).json(err));
 },
 create: function(req, res) {
   db.User
     .create(req.body)
     .then(dbModel => res.json(dbModel))
     .catch(err => res.status(422).json(err));
 },
 update: function(req, res) {
   db.User
     .findOneAndUpdate({ _id: req.params.id }, req.body)
     .then(dbModel => res.json(dbModel))
     .catch(err => res.status(422).json(err));
 },
 remove: function(req, res) {
   db.User
     .findById({ _id: req.params.id })
     .then(dbModel => dbModel.remove())
     .then(dbModel => res.json(dbModel))
     .catch(err => res.status(422).json(err));
 }
};



// const { User } = require("../models")

// exports.login = (req, res, next) => {
//     console.log(req.body)
//     return User.findOne(req.body, (err, user) => {
//         console.log(user, "user1")
//         if (err) return next(err)
//         if (!user) {
//             return next({
//                 message: "No user found with those creds."
//             })
//         }
//         console.log(user, "user2")
//         return res.status(200).json({ user })
//     })
// }

// exports.getUser = (req, res, next) => {
//     return User.findById(req.params.userId,(err,user)=>{
//         if(err) return next(err);
//         if(!user) return next({
//             message: "no user found"
//         })
//         return res.status(200).json(user)
//     })
// }