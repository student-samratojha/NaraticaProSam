const express = require("express");
const router = express.Router();
router.get("/login", function (req, res) {
  res.render("login");
});
router.post("/login",async func)
router.get("/register", function (req, res) {
  res.render("register");
});
