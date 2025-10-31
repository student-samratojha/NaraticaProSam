const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    default: "",
  },
  occupation:{
    type: String,
    required: true,
  },
  specification:{
    type: String,
    required: true,
  },
  expre
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
