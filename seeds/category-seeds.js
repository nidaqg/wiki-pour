const { Category } = require("../models");

const categoryData = [
  {
    category_name: "Spirit",
  },
  {
    category_name: "Beer",
  },
  {
    category_name: "Wine",
  },
  {
    category_name: "Non-Alcoholic",
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
