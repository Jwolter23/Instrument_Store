'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('carts', 
    [
      {
        items: 'Les Paul Custom',
        subtotal: 5799.00,
        user_id: 1,
        instrument_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
      items: 'SG Standard',
      subtotal: 1999.00,
      user_id: 2,
      instrument_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
   },
   {
    items: 'ES-335',
    subtotal: 3499.00,
    user_id: 3,
    instrument_id: 3,
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
