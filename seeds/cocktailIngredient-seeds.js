const { CocktailIngredient } = require('../models');

const cocktailIngredientData = [
  {
    cocktail_id: 1,
    ingredient_id: 1
  },
  {
    cocktail_id: 1,
    ingredient_id: 2
  },
  {
    cocktail_id: 1,
    ingredient_id: 3
  },
  {
    cocktail_id: 2,
    ingredient_id: 3
  },
];

const seedCocktailIngredientData = () => CocktailIngredient.bulkCreate(cocktailIngredientData);

module.exports = seedCocktailIngredientData;