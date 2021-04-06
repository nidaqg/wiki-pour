const { Cocktail } = require('../models');

const cocktailData = [
  {
    cocktail_name: 'Old Fashioned',
    rating_average: 5,
    instructions: 'Pour a quarter ounce simple syrup and two ounces whiskey in a rocks glass. Add two dashes of Angostura bitters, stir with a big cube and garnish with an orange peel',
    user_id: 1,
  },
  {
    cocktail_name: 'Negroni',
    rating_average: 4,
    instructions: 'Pour one once each of Gin Campari and sweet vermouth into a stirring glass. Stir then strain into rocks glass. Garnish with orange peel',
    user_id: 2,
  },
  {
    cocktail_name: 'Manhattan',
    rating_average: 4,
    instructions: 'Add all the bourbon (or rye), sweet vermouth and both bitters to a mixing glass with ice, and stir until well-chilled. Strain into a chilled coupe. Garnish with a brandied cherry.',
    user_id: 2,
  },
  {
    cocktail_name: 'White Russian',
    rating_average: 5,
    instructions: 'Add the vodka and Kahlúa to a rocks glass filled with ice. Top with the heavy cream and stir.',
    user_id: 1,
  },
  {
    cocktail_name: 'Dirty Martini',
    rating_average: 5,
    instructions: 'Add the gin or vodka, vermouth and olive brine to a mixing glass filled with ice and stir until well-chilled. Strain into a chilled cocktail glass. Garnish with a skewer of olives.',
    user_id: 1,
  },
];

const seedCocktails = () => Cocktail.bulkCreate(cocktailData);

module.exports = seedCocktails;