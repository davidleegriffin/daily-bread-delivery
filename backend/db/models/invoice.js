'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Invoice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Invoice.init({
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    subTotal: DataTypes.INTEGER,
    tax: DataTypes.INTEGER,
    total: DataTypes.INTEGER,
    paid: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Invoice',
  });
  return Invoice;
};