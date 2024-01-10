const {
  createJoke,
  findAllJoke,
  findOneJokeById,
  Update,
  deleteJoke,
} = require("../controllers/jokes.controller");

module.exports = (app) => {
  app.post("/api/joke", createJoke),
    app.get("/api/jokes", findAllJoke),
    app.get("/api/joke/:id", findOneJokeById),
    app.put("/api/joke/:id", Update),
    app.delete("/api/joke/:id", deleteJoke);
};
