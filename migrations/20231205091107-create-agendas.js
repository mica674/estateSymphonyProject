'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Agendas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      visitInformations: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER,

        references: { 
          model : 'users',
          key : 'id',
        }

      },
      idEmployee: {
        type: Sequelize.INTEGER,

        references: { 
          model : 'employees',
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
    await queryInterface.dropTable('Agendas');
  }
};