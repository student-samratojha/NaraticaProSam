const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const router = express.Router();
router.get("/login", function (req, res) {
  res.render("login");
});
router.post("/login", async function (req, res) {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      console.log("dont have an account or try again");
      res.redirect("/register");
    }
    const match = bcrypt.compare(password, user.password);
    if (!match) return res.send("invailid credetials try again");
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET
    );
    res.cookie("token", token);
    res.redirect("/dashboard");
  } catch (error) {
    console.log("error while loging", error);
  }
});
router.get("/register", function (req, res) {
  res.render("register");
});
router.post("/register",async function(req,res){
    const {name,email,password,photo,occupation,description} = req.body;
    try {
        const user = await userModel.findOne({email});
        if(user) {
            
        }
    } catch (error) {
        
    }
})
