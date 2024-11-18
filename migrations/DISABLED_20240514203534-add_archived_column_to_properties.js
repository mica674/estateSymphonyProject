'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Désactivé car la colonne à été ajouté dans la migration principale de Properties
    // await queryInterface.addColumn('Properties', 'archived', {
    //   type: Sequelize.BOOLEAN,
    //   allowNull: false,
    //   defaultValue: false
    // });
  },

  down: async (queryInterface, Sequelize) => {
    // Désactivé car la colonne à été ajouté dans la migration principale de Properties
    // await queryInterface.removeColumn('Properties', 'archived');
  }
};
