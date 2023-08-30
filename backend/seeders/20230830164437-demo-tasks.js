const {Tasks} = require('../models/tasks');

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Insert test data into the User table
    return queryInterface.bulkInsert('Tasks', [
      {
        title: "Something",
        description: "Something",
        dueDate: '31-12-2052',
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Test task",
        description: "Task tested",
        dueDate: '2023-08-31 10:33',
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more test users here as needed
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Tasks', null, {});
  }
};
