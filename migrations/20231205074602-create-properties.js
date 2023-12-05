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
      idStatus: {
        type: Sequelize.INTEGER,

        references: { 
          model : 'status',
          key : 'id',
        }

      },
      idPhotos: {
        type: Sequelize.INTEGER,

        references: { 
          model : 'photos',
          key : 'id',
        }

      },
      idStats: {
        type: Sequelize.INTEGER,

        references: { 
          model : 'stats',
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
      idDistrict: {
        type: Sequelize.INTEGER,

        references: { 
          model : 'district',
          key : 'id',
        }

      },
      idInventory: {
        type: Sequelize.INTEGER,

        references: { 
          model : 'inventory',
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
    await queryInterface.dropTable('Properties');
  }
};