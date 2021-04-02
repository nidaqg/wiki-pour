const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection");

class CategoryBrand extends Model {}

CategoryBrand.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      categoryType_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'categoryType',
          key: 'id',
          unique: false
        }
      },
      brandName_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'brandName',
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
      modelName: 'category_brand',
    }
  );

  module.exports = CategoryBrand;