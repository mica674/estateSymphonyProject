'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Estimations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      location: {
        type: Sequelize.STRING
      },
      houseType: {
        type: Sequelize.STRING
      },
      surface: {
        type: Sequelize.INTEGER //ATTENTION C'EST BIEN UN INTEGER PAS UN STRING
      },
      showerRoom: {
        type: Sequelize.INTEGER
      },
      room: {
        type: Sequelize.INTEGER
      },
      floor: {
        type: Sequelize.INTEGER
      },
      balcony: {
        type: Sequelize.INTEGER
      },
      parking: {
        type: Sequelize.BOOLEAN  //ATTENTION C'EST BIEN UN BOOLEAN PAS UN STRING
      },
      idUsers: {
        type: Sequelize.INTEGER,
        required: true,

        references: {
          model: 'users',
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
    await queryInterface.dropTable('Estimations');
  }
};