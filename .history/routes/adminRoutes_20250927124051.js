const express = require("express");
const userModel = require("../models/userModel");
const { authMiddleware, adminMiddleware } = require("../middleware/auth");
const router = express.Router();
router.get(
  "/dashboard",
  authMiddleware,
  adminMiddleware,
  async function (req, res) {
    const users = await userModel.find();
    res.render("adminD", { users ,user });
  }
);

module.exports = router;
