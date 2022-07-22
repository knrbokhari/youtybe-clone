const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const PORT = process.env.PORT || 5000;
const app = express();
dotenv.config();

const connect = () => {
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("DB connected");
    })
    .catch((err) => {
      throw err;
    });
  //   mongoose.connect(
  //     `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bd3aa.mongodb.net/?retryWrites=true&w=majority`
  //   );
};

app.listen(PORT, () => {
  connect();
  console.log(`Server is connected to port ${PORT}`);
});
