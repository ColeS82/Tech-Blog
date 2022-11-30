const sequelize = require("../config/connection");
const { User, Post, Comment } = require("../models");

const seedUsers = require("./user-seeds.json");
const seedPosts = require("./post-seeds.json");
const seedComments = require("./comment-seeds.json");
// const seedPosts = require('./post-seeds');
// const seedComments = require('./comment-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  // await seedUsers();
  const users = await User.bulkCreate(seedUsers, {
    individualHooks: true,
    returning: true,
  });
  // await seedPosts();
  const posts = await Post.bulkCreate(seedPosts, {
    individualHooks: true,
    returning: true,
  });
  // await seedComments();
  const comments = await Comment.bulkCreate(seedComments, {
    individualHooks: true,
    returning: true,
  });




  process.exit(0);
};

seedAll();
