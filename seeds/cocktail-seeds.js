const { Cocktail } = require('../models');

const cocktailData = [
  {
    cocktail_name: 'Old Fashioned',
    instructions: 'Pour a quarter ounce simple syrup and two ounces whiskey in a rocks glass. Add two dashes of Angostura bitters, stir with a big cube and garnish with an orange peel',
    brandName_id: 1,
    ingredient_id: [1, 2, 3],
    user_id: 1,
  },
  {
    cocktail_name: 'Negroni',
    instructions: 'Pour one once each of Gin Campari and sweet vermouth into a stirring glass. Stir then strain into rocks glass. Garnish with orange peel',
    brandName_id: [2, 3, 4],
    ingredient_id: 3,
    user_id: 2,
  },
];

const seedCocktails = () => Cocktail.bulkCreate(cocktailData);

module.exports = seedCocktails;