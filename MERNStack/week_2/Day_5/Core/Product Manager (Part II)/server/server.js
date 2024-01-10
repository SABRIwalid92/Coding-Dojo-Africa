const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors(), express.json(), express.urlencoded({ extended: true }));

require("dotenv").config();
const port = process.env.port;
require("./config/mongoose.config");
require("./routes/products.routes")(app);
app.listen(port, () => console.log(`LISTENING ON PORT ${port}`));
