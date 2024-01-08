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
      //OWNER
      idUsers: {
        type: Sequelize.INTEGER,

        references: { 
          model : 'Users',
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
      //BUYER
      idUsers1: {
        type: Sequelize.INTEGER,

        references: { 
          model : 'Users',
          key : 'id',
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
    await queryInterface.dropTable('Users_Properties');
  }
};