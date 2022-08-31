const express = require("express");
const _ = require("lodash");
const router = express.Router();
const {
  getHomePage,
  getAboutPage,
  getContactPage,
  getComposePage,
  getPostPage,
  postText,
} = require("../controllers/controller.js");

router.get("/", getHomePage);

router.get("/about", getAboutPage);

router.get("/contact", getContactPage);

router.get("/compose", getComposePage);

router.get("/posts/:test", getPostPage);

router.post("/compose", postText);

module.exports = router;
