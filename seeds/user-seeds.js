const { User } = require("../models");

const userData = [
  {
    user_name: "Tom Bombadil",
    email: "tBom@gmail.com",
    password: "12345678",
  },
  {
    user_name: "Tony Hawk",
    email: "theRealTony@gmail.com",
    password: "12345678",
  },
];

const seedUser = () =>
  User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUser;
