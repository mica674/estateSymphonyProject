'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // return queryInterface.bulkInsert('Employees', [
    //   {
    //     descriptions: 'Employé du mois',
    //     name: 'Alain',
    //     createdAt: new Date(),
    //   },
    //   {
    //     descriptions: 'Employé de base',
    //     name: 'Benoit',
    //     createdAt: new Date(),
    //   }
    // ], {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Employees', null, {});
  }
};