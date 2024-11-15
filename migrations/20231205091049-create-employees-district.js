'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Employees_Districts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idDistricts: {
        type: Sequelize.INTEGER,
        unique: true,
        references: {
          model: 'Districts',
          key: 'id',
        }
      },
      idEmployees: {
        type: Sequelize.INTEGER,
        unique: true,
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
    await queryInterface.dropTable('Employees_Districts');
  }
};