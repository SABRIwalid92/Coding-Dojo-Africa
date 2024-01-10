const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "{PATH} is required"],
    },
    price: {
      type: Number,
      required: [true, "{PATH} is required"],
      min: [0, "{PATH} can't be {VALUE}"],
    },
    description: {
      type: String,
      required: [true, "{PATH} is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
