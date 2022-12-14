'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.INTEGER,
          allowNull: false,
        field: 'user_id',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      instrument_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'instrument_id',
        onDelete: 'CASCADE',
        references: {
          model: 'instruments',
          key: 'id'
        }
      },
      review_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'review_id',
        onDelete: 'CASCADE',
        references: {
          model: 'reviews',
          key: 'id'
        }
      },
      rating: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('reviews');
  }
};