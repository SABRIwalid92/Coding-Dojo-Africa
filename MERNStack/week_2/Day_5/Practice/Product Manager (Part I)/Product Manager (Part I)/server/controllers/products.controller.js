const Product = require("../models/product.model");

module.exports = {
  findAllProducts: (req, res) => {
    Product.find()
      .then((products) => res.json(products))
      .catch((err) => res.json(err));
  },
  findOneSingleProduct: (req, res) => {
    Product.findOne({ _id: req.params.id })
      .then((oneProduct) => res.json(oneProduct))
      .catch((err) => res.json(err));
  },
  createProduc: (req, res) => {
    Product.create(req.body)
      .then((newProduct) => res.json(newProduct))
      .catch((err) => res.status(400).json(err));
  },
  updateProduc: (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updatedProduct) => res.json(updatedProduct))
      .catch((err) => res.status(400).json(err));
  },
  deleteProduct: (req, res) => {
    Product.deleteOne({ _id: req.params.id })
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },
};
