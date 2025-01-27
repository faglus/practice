const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
    unique: true,
  },
  displayName: String,
  email: {
    type: String,
    unique: true,
  },
  photo: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
