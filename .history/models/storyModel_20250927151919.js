const mongoose = require("mongoose");

const storySchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    story: {
      type: String,
      required: true,
    },
    writer: {
      ObjectId,
      ref: "User",
    },
    banner: {
      type: String,
      required: true,
    },
  },
  { Timestamp: true }
);

module.exports = mongoose.model("Story")