require("dotenv").config();
const express = require("express");
const router = require("./router");
const mongoose = require("mongoose");

const PORT = 8002;

const app = express();

app.listen(PORT, async () => {
  console.log(`Server up on port ${PORT}`);
});

app.use(router);

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
