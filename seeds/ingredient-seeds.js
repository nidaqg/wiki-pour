const { Ingredient } = require('../models');

const ingredientData = [
  {
    ingredient_name: 'Simple Syrup ',
  },
  {
    ingredient_name: 'Angustora Bitters',
  },
  {
    ingredient_name: 'Orange Peel',
  },
];

const seedIngredients = () => Ingredient.bulkCreate(ingredientData);

module.exports = seedIngredients;