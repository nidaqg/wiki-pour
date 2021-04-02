const { CategoryBrand } = require('../models');

const categoryBrandData = [
  {
    categoryType_id: 1,
    brandName_id: 1
  },
  {
    categoryType_id: 1,
    brandName_id: 2
  },
  {
    categoryType_id: 1,
    brandName_id: 3
  },
  {
    categoryType_id: 1,
    brandName_id: 4
  },

];

const seedCategoryBrand = () => CategoryBrand.bulkCreate(categoryBrandData);

module.exports = seedCategoryBrand;