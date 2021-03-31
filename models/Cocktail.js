const { Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

class Cocktail extends Model {}

Cocktail.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    cocktail_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    brandName_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'brandName',
        key: 'id',
        unique: false
      },
    },
    instructions: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ingredient_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'ingredient',
        key: 'id',
        unique: false
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
        unique: false
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'cocktail',
  }
);

module.exports = Cocktail;
