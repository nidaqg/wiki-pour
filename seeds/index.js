const seedCategories = require('./category-seeds');
const seedBrandName = require('./brandName-seeds');
const seedCategoryType = require('./categoryType-seeds');
const seedCocktails = require('./cocktail-seeds');
const seedIngredients = require('./ingredient-seeds');
const seedRatings = require('./rating-seeds');
const seedUser = require('./user-seeds');
// const seedCocktailRating = require('./cocktailRating-seeds');
// const seedCategoryBrand = require('./categoryBrand-seeds');
// const seedCocktailCategoryType = require('./cocktailCategoryType-seeds');
// const seedCocktailIngredientData = require('./cocktailIngredient-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedCategories();
    console.log('\n----- CATEGORIES SEEDED -----\n');
    
    await seedCategoryType();
    console.log('\n----- CATEGORY TYPES SEEDED -----\n');
    
    await seedBrandName();
    console.log('\n----- BRANDNAME SEEDED -----\n');

    await seedIngredients();
    console.log('\n----- INGREDIENTS SEEDED -----\n');
    
    await seedUser();
    console.log('\n----- USERS SEEDED -----\n');
    
    await seedRatings();
    console.log('\n----- RATINGS SEEDED -----\n');

    await seedCocktails();
    console.log('\n----- COCKTAILS SEEDED -----\n');
    
    // await seedCocktailRating();
    // console.log('\n----- CocktailRating SEEDED -----\n');
    

    // await seedCategoryBrand();
    // console.log('\n----- CategoryBrand SEEDED -----\n');

    // await seedCocktailCategoryType();
    // console.log('\n----- CocktailCategoryType SEEDED -----\n');

    // await seedCocktailIngredientData();
    // console.log('\n----- seedCocktailIngredient SEEDED -----\n');
    

    process.exit(0);
  };
  
  seedAll();