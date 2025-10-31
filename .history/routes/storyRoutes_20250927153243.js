const express = require("express");
const userModel = require("../models/userModel");
const { authMiddleware, adminMiddleware } = require("../middleware/auth");
const storyModel = require("../models/storyModel");
router.get("/write",authMiddleware,function(req,res){
    res.render("storyWrite",{user:req.user})
})
router.post("/write",authMiddleware,async function(req,res) {
    const {story,title,banner} = req.body;
    try {
        const estory = await storyModel.findOne({title});
        if(estory) return res.send(" Story ")




    } catch (error) {
        
    }
})