"use strict";
const { Model, Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cart.belongsTo(models.User, {
        foreignKey: "user_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      }),
        Cart.hasMany(models.Instrument, {
          foreignKey: "instrument_id",
          onDelete: "CASCADE",
          onUpdate: "CASCADE",
        });
    }
  }
  Cart.init(
    {
      items: DataTypes.STRING,
      subtotal: DataTypes.FLOAT,
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: "user_id",
        onDelete: "CASCADE",
        references: {
          model: "users",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Cart",
      tableName: "carts",
    }
  );
  return Cart;
};
