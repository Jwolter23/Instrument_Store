'use strict';
const {
  Model, Sequelize
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
    reviewId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'review_id',
      onDelete: 'CASCADE',
      references: {
        model: 'reviews',
        key: 'id'
      }
    },
    cartId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'cart_id',
      onDelete: 'CASCADE',
      references: {
        model: 'carts',
        key: 'id'
      }
    },
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