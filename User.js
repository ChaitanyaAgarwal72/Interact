const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  age: Number,
  residence: String,
  mobile: String
});

module.exports = mongoose.model('User', userSchema);
