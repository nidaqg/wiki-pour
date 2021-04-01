const { CocktailCategoryType } = require('../models');

const cocktailCategoryTypeData = [
  {
    cocktail_id: 1,
    categoryType_id: 1
  },
  {
    cocktail_id: 2,
    categoryType_id: 2
  },
  {
    cocktail_id: 2,
    categoryType_id: 3
  },
  {
    cocktail_id: 2,
    categoryType_id: 4
  },
];

const seedCocktailCategory = () => CocktailCategoryType.bulkCreate(cocktailCategoryTypeData);

module.exports = seedCocktailCategory;