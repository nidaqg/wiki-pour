const { BrandName } = require('../models');

const BrandNameData = [
  {
    brand_name: 'Buffalo Trace',
  },
  {
    brand_name: 'Campari',
  },
  {
    brand_name: 'Hendricks',
  },
  {
    brand_name: 'Antica Sweet Vermouth',
  },
  {
    brand_name: 'Woodford',
  },
  {
    brand_name: 'Titos',
  },
];

const seedBrandName = () => BrandName.bulkCreate(BrandNameData);

module.exports = seedBrandName;