const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

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
      type: ObjectId,
      ref: "User",
      required: true,
    },
    banner: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // automatically adds createdAt & updatedAt
);

module.exports = mongoose.model("Story", storySchema);
