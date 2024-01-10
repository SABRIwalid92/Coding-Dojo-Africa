const Author = require("../models/authors.model");

module.exports = {
  findAllAuthors: (req, res) => {
    Author.find()
      .sort([["fullName", -1]])
      .then((authors) => res.json(authors))
      .catch((err) => res.json(err));
  },
  findOneSingleAuthor: (req, res) => {
    Author.findOne({ _id: req.params.id })
      .then((oneAuthor) => res.json(oneAuthor))
      .catch((err) => res.json(err));
  },
  createAuthor: (req, res) => {
    Author.create(req.body)
      .then((newAuthor) => res.json(newAuthor))
      .catch((err) => res.status(400).json(err));
  },
  updateAuthor: (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updatedAuthor) => res.json(updatedAuthor))
      .catch((err) => res.status(400).json(err));
  },
  deleteAuthor: (req, res) => {
    Author.deleteOne({ _id: req.params.id })
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },
};
