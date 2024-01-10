const Joke = require("../models/joke.model");

module.exports = {
  createJoke: (req, res) => {
    Joke.create(req.body)
      .then((newCreatedJoke) => {
        console.log(`New Joke created with sucess`);
        res.status(201).json({
          Joke: newCreatedJoke,
          message: "New Joke created with success",
        });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json(error.errors);
      });
  },
  findAllJoke: (req, res) => {
    Joke.find()
      .then((Joke) => {
        console.log("All countries found with success");
        res
          .status(200)
          .json({ Joke, message: "All coutries found with success" });
      })
      .catch((error) => console.log(error));
  },
  findOneJokeById: (req, res) => {
    Joke.findById({ _id: req.params.id })
      .then((oneJoke) => {
        if (!oneJoke) {
          res.status(404).json({ error: "Joke not found" });
        } else {
          res.status(200).json({ oneJoke, message: "Joke found with success" });
        }
      })
      .catch((error) => {
        res.status(500).json({ error });
        console.log(error);
      });
  },
  Update: (req, res) => {
    Joke.findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((JokeUpdated) => {
        res
          .status(200)
          .json({ JokeUpdated, message: "Joke updated with success" });
      })
      .catch((error) => console.log(error));
  },
  deleteJoke: (req, res) => {
    Joke.findByIdAndDelete({ _id: req.params.id })
      .then((JokeDeleted) => {
        res
          .status(200)
          .json({ JokeDeleted, message: "Joke deleted with success" });
      })
      .catch((error) => console.log(error));
  },
};
