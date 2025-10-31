const express = require("express");
const userModel = require("../models/userModel");
const router = express.Router();
router.get("/dashboard",async function(req,res) {
    const users = await userModel.find();
    res.render("adminD")
})