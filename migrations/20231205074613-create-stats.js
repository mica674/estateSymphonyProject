'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Stats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sold: {
        type: Sequelize.INTEGER
      },
      signed: {
        type: Sequelize.INTEGER
      },
      clicCount: {
        type: Sequelize.INTEGER
      },
      idEmployee: {
        type: Sequelize.INTEGER,
        
        references: { 
          model : 'employees',
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
    await queryInterface.dropTable('Stats');
  }
};