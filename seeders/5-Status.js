'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Roles', [
      {
        sold: false,
        rent: false,
        hidden: false,
        createdAt: new Date(),
      },
      {
        sold: true,
        rent: false,
        hidden: false,
        createdAt: new Date(),
      },
      {
        sold: true,
        rent: false,
        hidden: true,
        createdAt: new Date(),
      },
      {
        sold: false,
        rent: true,
        hidden: false,
        createdAt: new Date(),
      },
      {
        sold: false,
        rent: true,
        hidden: true,
        createdAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Roles', null, {});
  }
};
