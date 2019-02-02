const express = require ("express");
const router = express.Router();
const Tobuy = require("../models/tobuy");

router.get("/tobuy", (req, res, next) => {
  Tobuy.find({}, "action")
  .then(data => res.json(data))
  .catch(next)
});

router.post("/tobuy", (req, res, next) => {
  if(req.body.action){
    Todo.create(req.body)
      .then(data => res.json(data))
      .catch(next)
  }else {
    res.json({
      error: "The input field is empty"
    })
  }
});

router.delete("/tobuy/:id", (req, res, next) => {
  Tobuy.findOneAndDelete({"_id":req.params.id})
    .then(data => res.json(data))
    .catch(next)  
})

module.exports = router;