const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
name:{
  type:stringify,
}
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
