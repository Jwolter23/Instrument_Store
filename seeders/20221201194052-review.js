'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'reviews',
      [
        {
          username: 'GuitarPlayer101',
          content: 'This is my favorite guitar, highly recommend',
          user_id: 1,
          instrument_id: 1,
          rating: 5,
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          username: 'PianoPlayer42',
          content: 'I am not a huge fan of this instrument',
          user_id: 2,
          instrument_id: 2,
          rating: 1,
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          username: 'DrumsPlayer3',
          content: 'THIS INSTRUMENT ROCKS',
          user_id: 3,
          instrument_id: 3,
          rating: 4,
          createdAt: new Date(),
          updatedAt: new Date()
          
        }
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('reviews', null, {})
  }
};
