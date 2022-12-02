"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("comments", [
      {
        username: "User101",
        content: "This is the best website I have ever been on",
        likes: 12,
        user_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "User202",
        content: "This website is alright",
        likes: 7,
        user_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "User303",
        content: "This website is horrible I hate it",
        likes: 3,
        user_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("reviews", null, {});
  },
};
