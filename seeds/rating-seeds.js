const { Rating } = require('../models');

const ratingData = [
  {
    rating: 1,
  },
  {
    rating: 2,
  },
  {
    rating: 3,
  },
  {
    rating: 4,
  },
  {
    rating: 5,
  },
];

const seedRatings = () => Rating.bulkCreate(ratingData);

module.exports = seedRatings;