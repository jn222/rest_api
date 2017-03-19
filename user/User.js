var mongoose = require('mongoose');
var UserSchem = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');
