const express = require("express");
const userModel = require("../models/userModel");
const { authMiddleware, adminMiddleware } = require("../middleware/auth");
router.get("/story/write",authMiddleware,function(req,res){
    res.render("storyWrite",{user:req,.user})
})