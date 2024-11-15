'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Properties_Folders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idProperties: {
        type: Sequelize.INTEGER,

        references: {
          model: 'Properties',
          key: 'id',
        }

      },
      idClientFolders: {
        type: Sequelize.INTEGER,

        references: {
          model: 'ClientFolders',
          key: 'id',
        }

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Properties_Folders');
  }
};