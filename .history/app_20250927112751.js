const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
app.use(express.json());
app.use(express.urlencoded({extended:true}))