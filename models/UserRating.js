const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection");

class UserRating extends Model {}

UserRating.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
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
      modelName: 'user_rating',
    }
  );

  module.exports = UserRating;