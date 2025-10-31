const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
name:{
  type:String,required:true,
},email:{
  type:String,required:true,
},
password:{
  type:S,required:true,
},
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
