const { CocktailRating } = require("../models");

const cocktailRatingData = [
  {
    cocktail_id: "1",
    rating_id: "5",
    user_id: "1",
  },
  {
    cocktail_id: "2",
    rating_id: "5",
    user_id: "2",
  },
];

const seedCocktailRating = () => CocktailRating.bulkCreate(cocktailRatingData);

module.exports = seedCocktailRating;
