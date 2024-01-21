'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Agendas extends Model {
    static associate(models) {
      // Agendas.hasOne(models.User,);
      // Agendas.hasOne(models.Employees,{
      //   foreignKey: 'idEmployee'
      // });
    }
  }
  Agendas.init({
    date: DataTypes.DATE,
    visitInformations: DataTypes.STRING,
    idUsers: DataTypes.INTEGER,
    idEmployee: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Agendas',
  });

  return Agendas;
};