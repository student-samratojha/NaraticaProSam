const express = require("express");
const userModel = require("../models/userModel");
const { authMiddleware } = require("../middleware/auth");
const router = express.Router();
router.get("/dashboard",authMiddleware,adm async function (req, res) {
  const users = await userModel.find();
  res.render("adminD", { users });
});

module.exports = router;
