const {
  getHomePageService,
  getPostPageService,
  postTextService,
} = require("../services/service.js");

const getHomePage = (req, res) => {
  getHomePageService()
    .then((result) => {
      res.render("home", {
        homeStartingContent: process.env.HOME_STARTING_CONTENT,
        foundList: result,
      });
    })
    .catch((err) => {
      res.send(err);
    });
};

const getAboutPage = (req, res) => {
  res.render("about", { aboutContent: process.env.ABOUT_PAGE_CONTENT });
};

const getContactPage = (req, res) => {
  res.render("contact", { contactContent: process.env.CONTACT_PAGE_CONTENT });
};

const getComposePage = (req, res) => {
  res.render("compose", {});
};

const getPostPage = (req, res) => {
  const postTitle = req.params.test;
  getPostPageService(postTitle)
    .then((foundPost) => {
      res.render("post", {
        matchedTitle: foundPost.title,
        matchedText: foundPost.post,
      });
    })
    .catch((err) => {
      res.send(err);
    });
};

const postText = (req, res) => {
  const title = req.body.title;
  const text = req.body.text;
  postTextService(title, text)
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  getHomePage,
  getAboutPage,
  getContactPage,
  getComposePage,
  getPostPage,
  postText,
};
