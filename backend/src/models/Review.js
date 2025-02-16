const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    text: { type: String, required: true },
    sentiment: { type: String, enum: ["positive", "negative", "neutral"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);
