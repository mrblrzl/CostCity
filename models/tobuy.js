const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for todo
const TobuySchema = new Schema({
  action: {
    type: String,
    approved: Boolean,
    required: [true, 'The tobuy text field is required']
  }
})

//create model for todo
const Tobuy = mongoose.model('tobuy', TobuySchema);

module.exports = Tobuy;
