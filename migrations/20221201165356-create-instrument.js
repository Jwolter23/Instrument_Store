'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('instruments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      brand: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      model: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT
      },
      cart_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        field: 'cart_id',
        onDelete: 'CASCADE',
        references: {
          model: 'carts',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('instruments');
  }
};