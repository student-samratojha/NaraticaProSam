const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
cont linkRoutes
const path = require("path");
require("dotenv").config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected to mongo db local port");
  })
  .catch((err) => {
    console.log("error while connecting to mongo port", err);
  });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.set("view engine", "ejs");
// Routes
app.use('/api', linkRoutes);

app.get('/', (req, res) => {
  res.send('LinkSnap Backend Running!');
});
app.listen(process.env.PORT, () => {
  console.log("Connected to local host 3000");
});
