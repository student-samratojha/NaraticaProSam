const express = require("express");
const userModel = require("../models/userModel");
const { authMiddleware, adminMiddleware } = require("../middleware/auth");
const storyModel = require("../models/storyModel");
router.get("/write", authMiddleware, function (req, res) {
  res.render("storyWrite", { user: req.user });
});
router.post("/write", authMiddleware, async function (req, res) {
  const { story, title, banner } = req.body;
  try {
    const estory = await storyModel.findOne({ title });
    if (estory) return res.send("This Story is Already Regitered");
    await storyModel.create({
      title,
      story,
      banner,
      writer: req.user._id,
    });
    console.log("successfully saved story");
    res.redirect("/story");
  } catch (error) {
    console.log("error while creating", error);
  }
});

router.get("/",authMiddleware,async function(req,res){
    const storys = await storyModel.find({writer:req.user._id});
    res.render("stories",{user:req.user,storys})
})