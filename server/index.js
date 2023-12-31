const express = require("express");
require("dotenv").config();
const cors = require("cors");
const routes = require("./routes/authRoutes");
const mongoose = require("mongoose");
const app = express();
const cookieParser = require("cookie-parser");

//database connection
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Error: " + err));

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use("/", routes);

const port = 8000;
app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);
