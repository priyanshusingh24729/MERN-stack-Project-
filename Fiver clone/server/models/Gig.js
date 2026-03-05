const mongoose = require("mongoose");

const gigSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    title: String,
    desc: String,
    price: Number,
    category: String,
  },
  { timestamps: true }
);

const gigmodel = mongoose.model("Gig", gigSchema);

module.exports = gigmodel