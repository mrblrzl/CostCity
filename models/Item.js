const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
  item_name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: false
  }
});

module.exports = Item = mongoose.model("items", ItemSchema);