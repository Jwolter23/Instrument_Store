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
        price: '$5799.00',
        cart_id: '1',
        review_id: '1',
        createdAt: new Date(),
        updatedAt: new Date()
     },

     {
       brand: 'Gibson',
       type: 'Electric Guitar',
       model: 'SG Standard',
       image: 'https://media.sweetwater.com/api/i/q-82__f-webp__ha-340bda9f117d6b93__hmac-325c0ac72caebc0a389e39f6e2b623340a0d858e/images/items/750/SG61VENH-large.jpg.auto.webp',
       color: 'Cherry',
       price: '$1999.00',
       cart_id: '2',
       review_id: '2',
       createdAt: new Date(),
       updatedAt: new Date()
      },

     {
        brand: 'Gibson',
        type: 'Electric Guitar',
        model: 'ES-335',
        image: 'https://media.sweetwater.com/api/i/q-82__f-webp__ha-334cb4dc6d4145f3__hmac-a40c86271f410c8c3eba7531db3225effebfadd2/images/guitars/ES3500SCNH/222220188/222220188-body-large.jpg.auto.webp',
        color: 'Sixties Cherry',
        price: '$3499.00',
       cart_id: '3',
       review_id: '3',
       createdAt: new Date(),
       updatedAt: new Date()
      },

      {
        brand: 'Gibson',
        type: 'Electric Guitar',
        model: 'Explorer',
        image: 'https://media.sweetwater.com/api/i/q-82__f-webp__ha-45cc341d14def6f5__hmac-a2c0cc6c3f3fc6545b7b9801d1e42dc424b5ff6d/images/items/750/DSXANCH1-large.jpg.auto.webp',
        color: 'Antique Natural',
        price: '$1999.00',
        cart_id: '4',
        review_id: '4',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        brand: 'Gibson',
        type: 'Electric Guitar',
        model: 'Flying V',
        image: 'https://media.sweetwater.com/api/i/q-82__f-webp__ha-369b7f8446c9a0a5__hmac-71f28116c7617eb3df8223c0ca98c2653eea9ead/images/items/750/DSVANCH-large.jpg.auto.webp',
        color: 'Antique Natural',
        price: '$1999.00',
        cart_id: '5',
        review_id: '5',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        brand: 'Fender',
        type: 'Electric Guitar',
        model: 'Stratocaster SRV',
        image: 'https://media.sweetwater.com/api/i/q-82__f-webp__ha-a8a34f17fdd16afe__hmac-a42b7bd164e2d4dd2524b296547ff99065d2d9a6/images/items/750/StratSRV3SB-large.jpg.auto.webp',
        color: 'Sunburst',
        price: '$2049.00',
        cart_id: '6',
        review_id: '6',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        brand: 'Fender',
        type: 'Electric Guitar',
        model: 'Stratocaster',
        image: 'https://media.sweetwater.com/api/i/q-82__f-webp__ha-18cadbab572ad5a6__hmac-6182afc09b3a7ab8e82ac5fbb68f527c32ffd395/images/items/750/StratAP2RSB-large.jpg.auto.webp',
        color: 'Sunburst',
        price: '$1699.00',
        cart_id: '7',
        review_id: '7',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        brand: 'Fender',
        type: 'Electric Guitar',
        model: 'Telecaster',
        image: 'https://media.sweetwater.com/api/i/q-82__f-webp__ha-7f081ccb62f5b281__hmac-dd2645805681d2d1b232700b9c99822fed20a5fe/images/items/750/TeleAP2MRP-large.jpg.auto.webp',
        color: 'Roasted Pine',
        price: '$1799.00',
        cart_id: '8',
        review_id: '8',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        brand: 'Ibanez',
        type: 'Electric Guitar',
        model: 'Steve Vai Signature',
        image: 'https://media.sweetwater.com/api/i/q-82__f-webp__ha-c2bca9fc2ac929dd__hmac-00a409b05d11171321d3909aea49b308c9e0784a/images/items/750/PIA3761XB-large.jpg.auto.webp',
        color: 'Onyx Black',
        price: '$3499.00',
        cart_id: '9',
        review_id: '9',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        brand: 'Ibanez',
        type: 'Electric Guitar',
        model: 'Joe Satriani Signature',
        image: 'https://media.sweetwater.com/api/i/q-82__f-webp__ha-03dff738ccb968e2__hmac-ef58eea93848c3e38dd660fc0b3f65283740f23c/images/items/750/JS2GD-large.jpg.auto.webp',
        color: 'Gold Boy',
        price: '$5799.00',
        cart_id: '10',
        review_id: '10',
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
