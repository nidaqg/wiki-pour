const { CategoryBrand } = require('../models');

const categoryBrandData = [
  {
    category_id: 1,
    brandName_id: 1
  },
  {
    category_id: 1,
    brandName_id: 2
  },
  {
    category_id: 1,
    brandName_id: 3
  },
  {
    category_id: 1,
    brandName_id: 4
  },
  {
    category_id: 1,
    brandName_id: 5
  },

];

const seedCategoryBrand = () => CategoryBrand.bulkCreate(categoryBrandData);

module.exports = seedCategoryBrand;