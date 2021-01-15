'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.hasMany(models.Product_Join, { foreignKey: 'productId' });
      Product.hasMany(models.Review, { foreignKey: 'productId'});
    }
  };
  Product.init({
    productName: DataTypes.STRING,
    price: DataTypes.NUMERIC,
    description: DataTypes.STRING,
    imageURL: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};