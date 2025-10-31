const mongoose = require("mongoose");

const storySchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    story:{
        type:String,
        required:true
    },
    writer