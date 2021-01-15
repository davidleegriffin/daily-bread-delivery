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
      Invoice.belongsTo(models.User, { foreignKey: 'userId' });
      Invoice.hasMany(models.Product_Join, { foreignKey: 'invoiceId' });
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