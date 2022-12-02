"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        username: "GuitarPlayer101",
        passwordDigest: "fidofhidfud8e83yfbejkenkje",
        firstName: "Bryan",
        lastName: "Smith",
        email: "bsmith@gmail.com",
        isLoggedIn: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "PianoPlayer42",
        passwordDigest: "dijfileked83784hhuh222b1jj",
        firstName: "Joe",
        lastName: "Jongo",
        email: "jjongo42@gmail.com",
        isLoggedIn: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "DrumsPlayer3",
        passwordDigest: "hfhsbdkkhello7766255",
        firstName: "George",
        lastName: "Lopez",
        email: "famousgeorge3@gmail.com",
        isLoggedIn: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
