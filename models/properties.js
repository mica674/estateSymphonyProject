'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Properties extends Model {
    static associate(models) {
      Properties.hasMany(models.Favories, {
        foreignKey: 'idProperties',
        as: 'favory'
      });
      Properties.hasMany(models.Histories, {
        foreignKey: 'idProperties',
        as: 'history'
      });
      Properties.belongsTo(models.District, {
        foreignKey: 'idDistrict',
        as: 'district'
      });
      Properties.belongsTo(models.Status, {
        foreignKey: 'idStatus',
        as: 'status'
      });
      Properties.belongsToMany(models.User, {
        through: 'properties_folder'
      });
      Properties.hasMany(models.Photos, {
        foreignKey: 'idProperties',
        as: 'photos'
      })
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