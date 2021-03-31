// importing models
const BrandName = require('./BrandName');
const Category = require('./Category');
const CategoryType = require('./CategoryType');
const Cocktail = require('./Cocktail');
const Ingredient = require('./Ingredient');
const Rating = require('./Rating');
const User = require('./User');
const UserRating = require('./UserRating');

Category.hasMany(CategoryType, {
    foreignKey: 'category_id',
});

CategoryType.belongsTo(Category, {
    foreignKey: 'category_id',
});

CategoryType.hasMany(BrandName, {
    foreignKey: 'categoryType_id',
});

BrandName.belongsTo(CategoryType, {
    foreignKey: 'categoryType_id',
});

User.hasMany(Cocktail, {
    foreignKey: 'user_id',
});

Cocktail.belongsTo(User, {
    foreignKey: 'user_id',
});

Cocktail.hasMany(Ingredient, {
    foreignKey: 'ingredient_id',
});

Ingredient.belongsTo(Cocktail, {
    foreignKey: 'ingredient_id',
});

User.belongstoMany(Rating, {
    through: {
        model: UserRating,
        unique: false
    },
    as: 'usersRatings'
});

Rating.belongstoMany(User, {
    through: {
        model: UserRating,
        unique: false
    },
    as: 'ratings'
});



module.exports = {
    BrandName,
    Category,
    CategoryType,
    Cocktail,
    Ingredient,
    Rating,
    User,
  };




