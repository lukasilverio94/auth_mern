const express = require("express");
require("dotenv").config();
const cors = require("cors");
const routes = require("./routes/authRoutes");
const mongoose = require("mongoose");

//database connection
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Error: " + err));

const app = express();

app.use("/", routes);

const port = 8000;
app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);
