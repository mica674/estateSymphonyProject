'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Properties extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Properties.init({
    price: DataTypes.INTEGER,
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
  }, {
    sequelize,
    modelName: 'Properties',
  });
  return Properties;
};