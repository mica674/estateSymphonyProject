'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Role', [
      {
        name: 'Admin'
      },
      {
        name: 'Manager'
      },
      {
        name: 'Employee'
      },
      {
        name: 'User'
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Role', null, {});
  }
};
