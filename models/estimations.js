'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Estimations extends Model {
    static associate(models) {
      Estimations.belongsTo(models.Users, {
        foreignKey: 'idUsers',
        as: 'Users'
      })
    }
  }
  Estimations.init({
    location: DataTypes.STRING,
    houseType: DataTypes.STRING,
    surface: DataTypes.INTEGER, //ATTENTION C'EST BIEN UN INTEGER PAS UN STRING
    showerRoom: DataTypes.INTEGER,
    room: DataTypes.INTEGER,
    floor: DataTypes.INTEGER,
    balcony: DataTypes.INTEGER,
    parking: DataTypes.BOOLEAN, //ATTENTION C'EST BIEN UN BOOLEAN PAS UN STRING
    idUsers: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Estimations',
  });
  return Estimations;
};