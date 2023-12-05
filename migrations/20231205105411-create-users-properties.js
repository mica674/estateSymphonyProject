'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users_Properties', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idUsers: {
        type: Sequelize.INTEGER,

        references: { 
          model : 'users',
          key : 'id',
        }

      },
      idProperties: {
        type: Sequelize.INTEGER,

        references: { 
          model : 'properties',
          key : 'id',
        }

      },
      idUsers1: {
        type: Sequelize.INTEGER,

        references: { 
          model : 'users',
          key : 'id',
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
    await queryInterface.dropTable('Users_Properties');
  }
};