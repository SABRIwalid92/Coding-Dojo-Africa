const {
  findAllAuthors,
  findOneSingleAuthor,
  createAuthor,
  updateAuthor,
  deleteAuthor,
} = require("../controllers/authors.controller");

module.exports = (app) => {
  app.get("/api/authors", findAllAuthors),
    app.get("/api/authors/:id", findOneSingleAuthor),
    app.post("/api/authors", createAuthor),
    app.put("/api/authors/:id", updateAuthor),
    app.delete("/api/authors/:id", deleteAuthor);
};
