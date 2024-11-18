'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // return queryInterface.bulkInsert('Agendas', [
    //   {
    //     date : '2024-12-26',
    //     visitInformations: 'Ceci est une description',
    //     userId: 1, 
    //     idEmployee: 2,
    //     createdAt : new Date(),
    //   }
    // ], {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Agendas', null, {});
  }
};
