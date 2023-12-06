'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Roles', [
      {
        name: 'Admin', 
        createdAt : new Date(),
      },
      {
        name: 'Manager',
        createdAt : new Date(),
      },
      {
        name: 'Employee',
        createdAt : new Date(),
      },
      {
        name: 'User',
        createdAt : new Date(),
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Roles', null, {});
  }
};
