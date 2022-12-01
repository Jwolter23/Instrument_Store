'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          username: 'GuitarPlayer101',
          passwordDigest: 'fidofhidfud8e83yfbejkenkje',
          firstName: 'Bryan',
          lastName: 'Smith',
          email: 'bsmith@gmail.com',
          isLoggedIn: false
        }
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  }
};
