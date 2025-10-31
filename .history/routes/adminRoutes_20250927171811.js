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
    try {
      const userId = req.params.id;

      // Delete user from DB
      await userModel.findByIdAndDelete(userId);

      console.log("Deleted successfully:", userId);
      res.redirect("/admin/dashboard");
    } catch (error) {
      console.log("Error while deleting user:", error);
      res.status(500).send("Internal Server Error");
    }
  }
);

module.exports = router;
