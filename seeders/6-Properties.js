'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Properties', [
      {
        price: 730,
        location: 'Location',
        surface: 59,
        showerRoom: 1,
        energising: 'A',
        typeEnergic: 'Electrique',
        clicCount: 321,
        description: 'Appartement de centre ville',
        heatingSystem: 'NC',
        floor: 2,
        balcony: 1,
        parking: 1,
        rooms: 3,
        idStatus: 1,
        idDistrict: 73,
        createdAt: new Date(),
      },
      {
        price: 500,
        location: 'Location',
        surface: 23,
        showerRoom: 1,
        energising: 'B',
        typeEnergic: 'Gaz',
        clicCount: 532,
        description: 'Appartement de banlieue',
        heatingSystem: 'NC',
        floor: 1,
        balcony: 1,
        parking: 1,
        rooms: 1,
        idStatus: 1,
        idDistrict: 74,
        createdAt: new Date(),
      },
      {
        price: 900,
        location: 'Maison',
        surface: 73,
        showerRoom: 1,
        energising: 'C',
        typeEnergic: 'Gaz',
        clicCount: 334,
        description: 'Maison de campagne',
        heatingSystem: 'NC',
        floor: 3,
        balcony: 0,
        parking: 2,
        rooms: 4,
        idStatus: 2,
        idDistrict: 73,
        createdAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Roles', null, {});
  }
};

/*  price: DataTypes.INTEGER,
    location: DataTypes.STRING,
    surface: DataTypes.INTEGER,
    showerRoom: DataTypes.INTEGER,
    energising: DataTypes.STRING,
    typeEnergic: DataTypes.STRING,
    clicCount: DataTypes.INTEGER,
    description: DataTypes.STRING,
    heatingSystem: DataTypes.STRING,
    floor: DataTypes.INTEGER,
    balcony: DataTypes.INTEGER,
    parking: DataTypes.BOOLEAN,
    rooms: DataTypes.INTEGER,
    idStatus: DataTypes.INTEGER,
    idDistrict: DataTypes.INTEGER*/
