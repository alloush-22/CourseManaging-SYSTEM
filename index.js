const express = require("express");

const app = express();
const courseRoute = require("./routes/courses");

const dotenv = require("dotenv").config();
const { PORT, URI } = process.env;
const mongoose = require("mongoose");

const cors =require('cors');

mongoose.connect(URI).then(() => {
  console.log("====================================");
  console.log("Database Connected");
  console.log("====================================");
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/article", courseRoute);

app.listen(PORT || 5000, () => {
  console.log("====================================");
  console.log(`Listening on port ${PORT}`);
  console.log("====================================");
});






