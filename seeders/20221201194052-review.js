"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("reviews", [
      {
        username: "GuitarPlayer101",
        content: "This is my favorite guitar, highly recommend",
        user_id: 4,
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        instrument_id: 4,
      },
      {
        username: "PianoPlayer42",
        content: "I am not a huge fan of this instrument",
        user_id: 5,
        rating: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        instrument_id: 5,
      },
      {
        username: "DrumsPlayer3",
        content: "THIS INSTRUMENT ROCKS",
        user_id: 6,
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        instrument_id: 6,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("reviews", null, {});
  },
};
