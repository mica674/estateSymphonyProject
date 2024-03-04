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
      Properties.belongsTo(models.Districts, {
        foreignKey: 'idDistricts',
        as: 'district'
      });
      Properties.belongsTo(models.Statuses, {
        foreignKey: 'idStatuses',
        as: 'status'
      });
      Properties.belongsToMany(models.Users, {
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
    idStatuses: DataTypes.INTEGER,
    idDistricts: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Properties',
  });
  return Properties;
};