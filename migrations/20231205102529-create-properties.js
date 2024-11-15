'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Properties', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.INTEGER
      },
      location: {
        type: Sequelize.STRING
      },
      surface: {
        type: Sequelize.INTEGER
      },
      showerRoom: {
        type: Sequelize.INTEGER
      },
      energising: {
        type: Sequelize.STRING
      },
      typeEnergic: {
        type: Sequelize.STRING
      },
      clicCount: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      heatingSystem: {
        type: Sequelize.STRING
      },
      floor: {
        type: Sequelize.INTEGER
      },
      balcony: {
        type: Sequelize.INTEGER
      },
      parking: {
        type: Sequelize.BOOLEAN
      },
      rooms: {
        type: Sequelize.INTEGER
      },
      idStatuses: {
        allowNull: false,
        type: Sequelize.INTEGER,

        references: {
          model: 'Statuses',
          key: 'id',
        }

      },
      idDistricts: {
        allowNull: false,
        type: Sequelize.INTEGER,

        references: {
          model: 'Districts',
          key: 'id',
        }

      },
      archived: {
        allowNull: true,
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Properties');
  }
};