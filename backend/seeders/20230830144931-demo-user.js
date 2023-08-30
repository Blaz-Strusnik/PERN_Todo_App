const bcrypt = require('bcrypt');
const {User} = require('../models/user');

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Create a hash of the password (you should use bcrypt to securely hash passwords)
    const hashedPassword = await bcrypt.hash('password123', 10);

    // Insert test data into the User table
    return queryInterface.bulkInsert('Users', [
      {
        username: 'john_doe',
        password: hashedPassword,
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'jane_doe',
        password: hashedPassword,
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more test users here as needed
    ]);
  },

  async down (queryInterface, Sequelize) {
    // Delete the inserted test data
    return queryInterface.bulkDelete('Users', null, {});
  }
};