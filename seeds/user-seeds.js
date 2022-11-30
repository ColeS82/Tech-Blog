const { User } = require("../models");

const userData = [
  {
    username: "Jim",
    password: "password1234",
  },
  {
    username: "Tom",
    password: "password1234",
  },
  {
    username: "jo",
    password: "password1234",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
