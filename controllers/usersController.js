const { User } = require("../models")

exports.login = (req, res, next) => {
    console.log(req.body)
    return User.findOne(req.body, (err, user) => {
        console.log(user, "user1")
        if (err) return next(err)
        if (!user) {
            return next({
                message: "No user found with those creds."
            })
        }
        console.log(user, "user2")
        return res.status(200).json({ user })
    })
}

exports.getUser = (req, res, next) => {
    return User.findById(req.params.userId,(err,user)=>{
        if(err) return next(err);
        if(!user) return next({
            message: "no user found"
        })
        return res.status(200).json(user)
    })
}