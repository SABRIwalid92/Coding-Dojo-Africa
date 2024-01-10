const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
  setup: {
    type: String,
    required: [true, "{PATH} is required"],
  },
  punchline: {
    type: String,
    required: [true, "{PATH} is required"],
  },
});

const Joke = mongoose.model("Joke", JokeSchema);
module.exports = Joke;
