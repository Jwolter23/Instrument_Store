'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'comments',
      [
        {
          username: 'User202',
          content: 'This is the best website I have ever been on',
          likes: 12,
          user_id: 1,
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
