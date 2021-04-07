const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class CocktailCategory extends Model {}

CocktailCategory.init(
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
    categoryType_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "category",
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
    modelName: "cocktail_categorytype",
  }
);

module.exports = CocktailCategory;
