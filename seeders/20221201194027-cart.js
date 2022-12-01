'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('carts', 
    [
      {
        items: 'SG Standard',
        subtotal: 1999.00,
        user_id: 1,
        instrument_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
     }
    ], 
    {}
    );
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('carts', null, {});
     
  }
};
