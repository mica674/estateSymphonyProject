'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Inventories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      annotations: {
        type: Sequelize.STRING
      },
      photo: {
        type: Sequelize.STRING
      },
      idProperty: {
        type: Sequelize.INTEGER,

        references: { 
          model : 'properties',
          key : 'id',
        }

      },
      idUser: {
        type: Sequelize.INTEGER,

        references: { 
          model : 'users',
          key : 'id',
          primaryKey: true,
        }

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Inventories');
  }
};