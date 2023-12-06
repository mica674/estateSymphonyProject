'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Districts', [
      { name: 'Centre-ville', createdAt : new Date() },
      { name: "Gare la vallée", createdAt : new Date() },
      { name: "Henriville", createdAt : new Date() },
      { name: "Pigeonnier", createdAt : new Date() },
      { name: "Longpre", createdAt : new Date() },
      { name: "Marivaux", createdAt : new Date() },
      { name: "Montière_Etouvie", createdAt : new Date() },
      { name: "Croix rompue_Pierre Rollin_Québec", createdAt : new Date() },
      { name: "Renancourt_Petit Saint Jean", createdAt : new Date() },
      { name: "Saint Acheul", createdAt : new Date() },
      { name: "Saint Honoré", createdAt : new Date() },
      { name: "Saint Leu", createdAt : new Date() },
      { name: "Saint Maurice", createdAt : new Date() },
      { name: "Saint Pierre", createdAt : new Date() },
      { name: "Saint Roch_La Hotoie", createdAt : new Date() },
      { name: "Le Faubourg de Noyon", createdAt : new Date() },
      { name: "Vallée Saint Ladre", createdAt : new Date() },
      { name: "Vallée des vignes_André Chenier_Paul Claudel", createdAt : new Date() },
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Districts', null, {});
  }
};
