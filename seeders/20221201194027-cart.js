'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('carts', 
    [
      {
        items: 'Les Paul Custom',
        subtotal: 5799.00,
        user_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
      items: 'SG Standard',
      subtotal: 1999.00,
      user_id: 5,
      createdAt: new Date(),
      updatedAt: new Date()
   },
   {
    items: 'ES-335',
    subtotal: 3499.00,
    user_id: 6,
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
