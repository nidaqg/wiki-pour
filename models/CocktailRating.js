const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection");

class CocktailRating extends Model {}

CocktailRating.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      cocktail_id: {
        type: DataTypes.INTEGER,
        references: {
          onUpdate: 'CASCADE',
          model: 'cocktail',
          key: 'id',
          unique: false
        }
      },
      rating_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'rating',
          key: 'id',
          unique: false
        }
      }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'cocktail_rating',
    }
  );

  module.exports = CocktailRating;