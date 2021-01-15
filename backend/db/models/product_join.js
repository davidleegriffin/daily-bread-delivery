'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product_Join extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product_Join.belongsTo(models.Product, { foreignKey: 'productId' });
      Product_Join.belongsTo(models.Invoice, { foreignKey: 'invoiceId' });

    }
  };
  Product_Join.init({
    invoiceId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product_Join',
  });
  return Product_Join;
};