'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('instruments', 
     [
      {
        brand: 'Gibson',
        type: 'Electric Guitar',
        model: 'Les Paul Custom',
        image: 'https://media.sweetwater.com/api/i/q-82__f-webp__ha-c7cac9fc507dd19d__hmac-39e8323cf1913e9f1eb3d39e4fcd20169f6afb1a/images/items/750/LPCAWGH1E-large.jpg.auto.webp',
        color: 'White',
        price: 5799.00,
        cart_id: 1,
        review_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
     },

     {
       brand: 'Gibson',
       type: 'Electric Guitar',
       model: 'SG Standard',
       image: 'https://media.sweetwater.com/api/i/q-82__f-webp__ha-340bda9f117d6b93__hmac-325c0ac72caebc0a389e39f6e2b623340a0d858e/images/items/750/SG61VENH-large.jpg.auto.webp',
       color: 'Cherry',
       price: 1999.00,
       cart_id: 2,
       review_id: 2,
       createdAt: new Date(),
       updatedAt: new Date()
      },

     {
        brand: 'Gibson',
        type: 'Electric Guitar',
        model: 'ES-335',
        image: 'https://media.sweetwater.com/api/i/q-82__f-webp__ha-334cb4dc6d4145f3__hmac-a40c86271f410c8c3eba7531db3225effebfadd2/images/guitars/ES3500SCNH/222220188/222220188-body-large.jpg.auto.webp',
        color: 'Sixties Cherry',
        price: 3499.00,
       cart_id: 3,
       review_id: 3,
       createdAt: new Date(),
       updatedAt: new Date()
      },

    ], 
    {}
    );
    
  },


  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('instruments', null, {})
     
  }
};
