'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Agendas extends Model {
    static associate(models) {
      Agendas.belongsTo(models.Users, {
        foreignKey: 'idUsers',
        as: 'user'
      });
      Agendas.belongsTo(models.Employees, {
        foreignKey: 'idEmployees',
        as: 'employee'
      });
    }
  }
  Agendas.init({
    date: DataTypes.DATE,
    visitInformations: DataTypes.STRING,
    idUsers: DataTypes.INTEGER,
    idEmployees: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Agendas',
  });

  return Agendas;
};