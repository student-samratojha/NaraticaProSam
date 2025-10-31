const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const {
  authMiddleware,
  userMiddleware,
  adminMiddleware,
} = require("../middleware/auth");
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
      { id: user._id, email: user.email, role: user.role }, // role add karo
      process.env.JWT_SECRET
    );
    res.cookie("token", token, {
      httpOnly: true, // security: JS se access na ho
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    if (user.role === "admin") return res.redirect("/admin/dashboard");
    res.redirect("/dashboard");
  } catch (error) {
    console.log("error while loging", error);
  }
});
router.get("/register", function (req, res) {
  res.render("register");
});
router.post("/register", async function (req, res) {
  const {
    name,
    email,
    password,
    specification,
    photo,
    occupation,
    description,
  } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (user) {
      console.log("already have an account or try again");
      res.redirect("/login");
    }
    const hpass = await bcrypt.hash(password, 10);
    const newUser = await userModel.create({
      name,
      email,
      password: hpass,
      photo,
      occupation,
      specification,
      description,
    });
    console.log("registered successfull", newUser.name);
    res.redirect("/login");
  } catch (error) {
    console.log("error while register", error);
  }
});

router.get("/logout", function (req, res) {
  res.clearCookie("token");
  res.redirect("/login");
});

router.get("/dashboard", authMiddleware, userMiddleware, function (req, res) {
  res.render("dashboard", { user: req.user });
});
//common logged in user profile edit page
router.get("/user/edit", authMiddleware, function (req, res) {
  res.render("editProfile", { user: req.user });
});
router.post("/edit",authMiddleware,async function(req,res){
     const {
    name,
    email,
    password,
    specification,
    photo,
    occupation,
    description,
  } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (user) {
      console.log("already have an account or try again");
      res.redirect("/login");
    }
    const hpass = await bcrypt.hash(password, 10);
    const newUser = await userModel.create({
      name,
      email,
      password: hpass,
      photo,
      occupation,
      specification,
      description,
    });
    console.log("registered successfull", newUser.name);
    res.redirect("/login");
})
module.exports = router;
