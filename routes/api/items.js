const express = require("express");
const router = express.Router();

// User model
const Item = require("../../models/Item");


//Get all items 

router.get('/admin', (req, res) => {
    console.log('req.item', req.item);
    Item.find({})
      .then(items => {
        console.log('items', items);
        res.json(items);
      })
  });

router.post("/admin", (req, res) => {
    
 // Form validation
    const newItem = new Item({
        item_name: req.body.item_name
        // ,email: req.body.email,
      });
      if (err) throw err;
      newItem
      .save()
      .then(item => res.json(item))
      .catch(err => console.log(err));
  });


  module.exports = router;