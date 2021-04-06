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
  {
    ingredient_name: 'Orange Bitters',
  },
  {
    ingredient_name: 'Brandied Cherry',
  },
  {
    ingredient_name: 'Kahlua',
  },
  {
    ingredient_name: 'Heavy cream',
  },
  {
    ingredient_name: 'Olive Brine / Olives',
  },
];

const seedIngredients = () => Ingredient.bulkCreate(ingredientData);

module.exports = seedIngredients;