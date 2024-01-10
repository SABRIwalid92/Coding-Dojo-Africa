const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      trim: true,
      required: [true, "{PATH} is required"],
      minLength: [3, "{PATH} must be at least 3 characters"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Author", AuthorSchema);
