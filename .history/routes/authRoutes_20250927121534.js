const express = require("express");
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
    const match = bcrypt.compare(password , user.password);
    if(!match) rtur
  } catch (error) {}
});
router.get("/register", function (req, res) {
  res.render("register");
});
