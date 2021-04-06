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
  {
    cocktail_id: 3,
    categoryType_id: 5
  },
  {
    cocktail_id: 4,
    categoryType_id: 6
  },
  {
    cocktail_id: 5,
    categoryType_id: 6
  },
];

const seedCocktailCategory = () => CocktailCategoryType.bulkCreate(cocktailCategoryTypeData);

module.exports = seedCocktailCategory;