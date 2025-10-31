const express = require("express");
const router = express.Router();
router.get("/login", function (req, res) {
  res.render("login");
});
router.post("/login",async function(req,res){
    const {email,password} = req.body;
    try {
        
    } catch (error) {
        
    }
})
router.get("/register", function (req, res) {
  res.render("register");
});
