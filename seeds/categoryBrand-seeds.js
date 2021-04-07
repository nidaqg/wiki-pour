const { CategoryBrand } = require("../models");

const categoryBrandData = [
  {
    categoryType_id: 1,
    brandName_id: 1,
  },
  {
    categoryType_id: 2,
    brandName_id: 2,
  },
  {
    categoryType_id: 3,
    brandName_id: 3,
  },
  {
    categoryType_id: 4,
    brandName_id: 4,
  },
  {
    categoryType_id: 5,
    brandName_id: 5,
  },
  {
    categoryType_id: 6,
    brandName_id: 6,
  },
];

const seedCategoryBrand = () => CategoryBrand.bulkCreate(categoryBrandData);

module.exports = seedCategoryBrand;
