// importing models
const BrandName = require('./BrandName');
const Category = require('./Category');
const CategoryType = require('./CategoryType');
const Cocktail = require('./Cocktail');
const Ingredient = require('./Ingredient');
const Rating = require('./Rating');
const User = require('./User');
// const CocktailRating = require('./CocktailRating');
// const CocktailIngredient = require('./CocktailIngredient');
// const CocktailCategoryType = require('./CocktailCategoryType');
// const CategoryBrand = require('./CategoryBrand');

Category.hasMany(CategoryType, {
    foreignKey: 'category_id',
});

// CategoryType.belongsTo(Category, {
//     foreignKey: 'category_id',
// });

CategoryType.hasMany(BrandName, {
    foreignKey: 'categoryType_id',
});

// BrandName.belongsTo(CategoryType, {
//     foreignKey: 'categoryType_id',
// });

User.hasMany(Cocktail, {
    foreignKey: 'user_id',
});

// Cocktail.hasMany(BrandName, {
//     foreignKey: 'brandName_id'
// });

// BrandName.belongsTo(Cocktail, {
//     foreignKey: 'brandName_id',
// });


// Cocktail.belongsTo(User, {
//     foreignKey: 'user_id',
// });

// Cocktail.hasMany(Rating, {
//     foreignKey: 'rating_id',
// });

// Rating.belongsTo(Cocktail, {
//     foreignKey: 'rating_id',
// });

// Cocktail.hasMany(Ingredient, {
//     foreignKey: 'ingredient_id',
// });

// Ingredient.belongsTo(Cocktail, {
//     foreignKey: 'ingredient_id',
// });

// Cocktail.belongsToMany(Rating, {
//     through: {
//         model: CocktailRating,
//         onUpdate: 'CASCADE',
//         unique: false
//     },
//     as: 'CocktailRating'
// });

// Rating.belongsToMany(Cocktail, {
//     through: {
//         model: CocktailRating,
//         onUpdate: 'CASCADE',
//         unique: false
//     },
//     as: 'ratings'
// });

// Cocktail.belongsToMany(Ingredient, {
//     through: {
//         model: CocktailIngredient,
//         unique: false
//     },
//     as: 'cocktailIngredients'
// });

// Ingredient.belongsToMany(Cocktail, {
//     through: {
//         model: CocktailIngredient,
//         unique: false
//     },
//     as: 'cocktails'
// });

// Cocktail.belongsToMany(Category, {
//     through: {
//         model: CocktailCategoryType,
//         unique: false
//     },
//     as: 'cocktailCategoryType'
// });

// Category.belongsToMany(Cocktail, {
//     through: {
//         model: CocktailCategoryType,
//         unique: false
//     },
//     as: 'categoryType'
// });

// Category.belongsToMany(BrandName, {
//     through: {
//         model: CategoryBrand,
//         unique: false
//     },
//     as: 'categoryBrand'
// });

// BrandName.belongsToMany(Category, {
//     through: {
//         model: CategoryBrand,
//         unique: false
//     },
//     as: 'brand'
// });





module.exports = {
    BrandName,
    Category,
    CategoryType,
    Cocktail,
    Ingredient,
    Rating,
    User,
    // CocktailRating,
    // CocktailIngredient,
    // CocktailCategoryType,
    // CategoryBrand,
  };




