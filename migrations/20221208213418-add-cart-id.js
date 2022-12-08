'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.addColumn('carts', 'cart_id',{
    type:Sequelize.INTEGER
   })
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('carts', 'cart_id')
  }
};