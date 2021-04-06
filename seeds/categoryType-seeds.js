const { CategoryType } = require('../models');

const CategoryTypeData = [
  {
    categoryType_name: 'Whiskey',
    category_id: 1,
  },
  {
    categoryType_name: 'Aperitif',
    category_id: 1,
  },
  {
    categoryType_name: 'Gin',
    category_id: 1,
  },
  {
    categoryType_name: 'Vermouth',
    category_id: 1,
  },
  {
    categoryType_name: 'Bourbon',
    category_id: 1,
  },
  {
    categoryType_name: 'Vodka',
    category_id: 1,
  },
];

const seedCategoryType = () => CategoryType.bulkCreate(CategoryTypeData);

module.exports = seedCategoryType;