const mongoose = require('mongoose');

const travelSchema = new mongoose.Schema({
  name: String,
  destination: String,
  date: String,
  time: String,
  vacancy: Number,
  mobile: String
});

module.exports = mongoose.model('Travel', travelSchema);
