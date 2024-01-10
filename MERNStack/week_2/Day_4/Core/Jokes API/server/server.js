const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./config/mongoose.config");
require("./routes/jokes.route")(app);

// ---------------------
app.listen(process.env.port, () => {
  console.log("SERVER IS RUNNIG ON PORT ", process.env.port);
});
