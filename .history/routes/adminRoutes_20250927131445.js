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
    res.render("adminD", { users, user: req.user });
  }
);
router.get(
  "/delete/user/:id",
  authMiddleware,
  adminMiddleware,
  async function (req, res) {
    // await userModel.findByIdAndDelete(req.params.id);
    console.log("deleted successfully");
    res.redirect("admin/dashboard");
  }
);
module.exports = router;
