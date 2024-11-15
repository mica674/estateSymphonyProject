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
      idUsers: {
        type: Sequelize.INTEGER,

        references: {
          model: 'Users',
          key: 'id',
        }

      },
      idEmployees: {
        type: Sequelize.INTEGER,

        references: {
          model: 'Employees',
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
    await queryInterface.dropTable('Agendas');
  }
};