const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class CocktailIngredient extends Model {}

CocktailIngredient.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    cocktail_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "cocktail",
        key: "id",
        unique: false,
      },
    },
    ingredient_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "ingredient",
        key: "id",
        unique: false,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "cocktail_ingredient",
  }
);

module.exports = CocktailIngredient;
