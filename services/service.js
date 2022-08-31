const Post = require("../models/model.js");

const getHomePageService = () => {
  return Post.find({});
};

const getPostPageService = (postTitle) => {
  return Post.findOne({ _id: postTitle });
};

const postTextService = (title, text) => {
  return new Post({
    title: title,
    post: text,
  }).save();
};

module.exports = { getHomePageService, getPostPageService, postTextService };
