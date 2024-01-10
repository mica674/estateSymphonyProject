'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Employees', [
    {
      descriptions: 'Ceci est une description',
      name: 'Laure Test', 
      createdAt : new Date(),
    }, 
    {
      descriptions: 'Ceci est une description 1',
      name: 'Laure Test2', 
      createdAt : new Date(),
    }
  ], {});
},

async down(queryInterface, Sequelize) {
  return queryInterface.bulkDelete('Employees', null, {});
}
};