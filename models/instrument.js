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
      // define association here
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
  });
  return Instrument;
};