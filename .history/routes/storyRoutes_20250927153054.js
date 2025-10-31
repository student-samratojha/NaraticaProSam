const express = require("express");
const userModel = require("../models/userModel");
const { authMiddleware, adminMiddleware } = require("../middleware/auth");
router.get("/write",authMiddleware,function(req,res){
    res.render("storyWrite",{user:req.user})
})
router.post("/write",authMiddleware,async function(req,res) {
    const {story,title,banner,}
})