const express = require("express");
const userModel = require("../models/userModel");
const router = express.Router();
router.get("/login", function (req, res) {
  res.render("login");
});
router.post("/login",async function(req,res){
    const {email,password} = req.body;
    try {
        const user = await userModel.findOne({email});
        if(!user) return res.redirect("dont have an account try again")
    } catch (error) {
        
    }
})
router.get("/register", function (req, res) {
  res.render("register");
});
