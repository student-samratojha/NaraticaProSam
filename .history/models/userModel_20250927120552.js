const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
name:{
  type:stringify,required:true,
}
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
