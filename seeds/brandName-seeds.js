const { BrandName } = require('../models');

const BrandNameData = [
  {
    brand_name: 'Buffalo Trace',
    categoryType_id: 1,
  },
  {
    brand_name: 'Campari',
    categoryType_id: 2,
  },
  {
    brand_name: 'Hendricks',
    categoryType_id: 3,
  },
  {
    brand_name: 'Antica Sweet Vermouth',
    categoryType_id: 4,
  },
];

const seedBrandName = () => BrandName.bulkCreate(BrandNameData);

module.exports = seedBrandName;