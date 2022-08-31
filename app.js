//jshint esversion:6

const express = require("express");
const ejs = require("ejs");
const mongoConnect = require("./loaders/mongo");
const router = require("./routes/route.js");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

mongoConnect();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", router);
app.use("/about", router);
app.use("/contact", router);
app.use("/compose", router);
app.use("/posts/:text", router);

app.listen(process.env.PORT, function () {
  console.log("Server started on port " + process.env.PORT + ".");
});
