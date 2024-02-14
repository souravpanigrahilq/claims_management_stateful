const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  mail: {
    type: String,
  },
  age: {
    type: Number,
  },
  password: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
