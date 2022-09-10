const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    topic: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
    imageURL: {
      type: String,
    },
    duration: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("course", CourseSchema);
