'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn('reviews','review_id',{
      type:Sequelize.INTEGER
    }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('reviews','review_id')
  }
};
