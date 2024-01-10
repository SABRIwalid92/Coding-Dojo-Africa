const {
  findAllProducts,
  findOneSingleProduct,
  createProduc,
  updateProduc,
  deleteProduct,
} = require("../controllers/products.controller");

module.exports = (app) => {
  app.get("/api/products", findAllProducts),
    app.get("/api/product/:id", findOneSingleProduct),
    app.post("/api/products", createProduc),
    app.put("/api/product/:id", updateProduc),
    app.delete("/api/product/:id", deleteProduct);
};
