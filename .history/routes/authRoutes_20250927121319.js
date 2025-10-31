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
    } catch (error) {
        
    }
})
router.get("/register", function (req, res) {
  res.render("register");
});
