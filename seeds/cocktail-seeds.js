const { Cocktail } = require('../models');

const cocktailData = [
  {
    cocktail_name: 'Old Fashioned',
    //brandName_id: 1,
    instructions: 'Pour a quarter ounce simple syrup and two ounces whiskey in a rocks glass. Add two dashes of Angostura bitters, stir with a big cube and garnish with an orange peel',
    //ingredient_id: 1,
    user_id: 1,
    //rating_id: 5,
  },
  {
    cocktail_name: 'Negroni',
    //brandName_id: 2,
    instructions: 'Pour one once each of Gin Campari and sweet vermouth into a stirring glass. Stir then strain into rocks glass. Garnish with orange peel',
    //ingredient_id: 3,
    user_id: 2,
    //rating_id: 4,
  },
];

const seedCocktails = () => Cocktail.bulkCreate(cocktailData);

module.exports = seedCocktails;