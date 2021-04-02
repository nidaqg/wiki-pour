const { Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

class BrandName extends Model {}

BrandName.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    brand_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // categoryType_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'categoryType',
    //     key: 'id',
    //     unique: false
    //   },
    // }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'brandName',
  }
);

module.exports = BrandName;
