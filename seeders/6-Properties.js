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
      {
        price: 835,
        location: 'Appartement',
        surface: 65,
        showerRoom: 1,
        energising: 'B',
        typeEnergic: 'Gaz',
        clicCount: 123,
        description: "T3 NEUF avec terrasse et parking à AMIENS. \n Résidence neuve située Quartier Intercampus et Paul Claudel. Proche des commerces et commodités. Appartement T3 de 65,9 m² avec une agréable terrasse de 11,3 m². Il se compose d'une entrée, d'un cellier, d'une belle pièce de vie ouverte sur un coin cuisine aménagé (évier, plaque de cuisson, meubles de rangement, plan de travail) et prolongée par la terrasse. Vous profiterez également de 2 chambres, d'une salle d'eau et d'un WC indépendant. Chauffage et eau chaude compris dans les charges.",
        heatingSystem: 'NC',
        floor: 2,
        balcony: 1,
        parking: 1,
        rooms: 3,
        idStatus: 2,
        idDistrict: 80,
        createdAt: new Date(),
      },
      {
        price: 945,
        location: 'Appartement',
        surface: 80,
        showerRoom: 1,
        energising: 'B',
        typeEnergic: 'Gaz',
        clicCount: 234,
        description: "APPARTEMENT. A Amiens SUD dans une résidence neuve à louer appartement de type 4 comprenant : une entrée avec placard, un séjour avec cuisine aménagée et équipée (hotte, plaque, four), trois chambres, une salle de bains avec baignoire, un wc séparé.Une place de stationnement.Chauffage collectif URBAIN. L'eau chaude et le chauffage sont compris dans la provision sur charges avec une régularisation annuelle.",
        heatingSystem: 'NC',
        floor: 2,
        balcony: 1,
        parking: 1,
        rooms: 4,
        idStatus: 2,
        idDistrict: 80,
        createdAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Properties', null, {});
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
    idDistrict: DataTypes.INTEGER
    
    Dépend de la base de données :
      HELP : idStatus possibles : 1(vendu),2(loué),3
      HELP : idDistrict possibles : 73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90
    */
