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
      cockatil_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'cockatil',
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
      modelName: 'cockatil_rating',
    }
  );

  module.exports = CocktailRating;