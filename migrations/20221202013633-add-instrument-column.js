'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.addColumn('reviews', 'instrument_id',{
    type:Sequelize.INTEGER
   })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('reviews', 'instrument_id')
  }
};