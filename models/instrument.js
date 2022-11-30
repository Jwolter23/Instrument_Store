'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Instrument extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Instrument.belongsTo(models.Review, {
        foreignKey: 'review_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      Instrument.belongsTo(models.Cart, {
        foreignKey: 'cart_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }
  Instrument.init({
    brand: DataTypes.STRING,
    type: DataTypes.STRING,
    model: DataTypes.STRING,
    image: DataTypes.STRING,
    color: DataTypes.STRING,
    price: DataTypes.FLOAT,
    cart_id: DataTypes.INTEGER,
    review_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Instrument',
    tableName: 'instruments'
  });
  return Instrument;
};