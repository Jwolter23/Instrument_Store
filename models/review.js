'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Review.belongsTo(models.User, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }),
      Review.belongsTo(models.Instrument, {
        foreignKey: 'instrument_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Review.init({
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'user_id',
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    },
    instrumentId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'user_id',
      onDelete: 'CASCADE',
      references: {
        model: 'instruments',
        key: 'id'
      }
    },
    username: DataTypes.STRING,
    content: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    instrument_id: DataTypes.INTEGER,
    rating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Review',
    tableName: 'reviews'
  });
  return Review;
};