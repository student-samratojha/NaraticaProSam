const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const path = require("path");
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("connected to mongo db local port");
}).catch((err) =>{
    
})
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.set("view engine", "ejs");
app.get("/", function (req, res) {
  res.render("index");
});
app.listen(process.env.PORT, () => {
  console.log("Connected to local host 3000");
});
