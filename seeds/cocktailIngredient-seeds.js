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
  {
    cocktail_id: 3,
    ingredient_id: 4
  },
  {
    cocktail_id: 3,
    ingredient_id: 5
  },
  {
    cocktail_id: 4,
    ingredient_id: 6
  },
  {
    cocktail_id: 4,
    ingredient_id: 7
  },
  {
    cocktail_id: 5,
    ingredient_id: 8
  }
];

const seedCocktailIngredientData = () => CocktailIngredient.bulkCreate(cocktailIngredientData);

module.exports = seedCocktailIngredientData;