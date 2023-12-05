'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Statuses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sold: {
        type: Sequelize.BOOLEAN
      },
      rent: {
        type: Sequelize.BOOLEAN
      },
      hidden: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Statuses');
  }
};