'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Agendas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      // console.log(models);

      Agendas.hasOne(models.User,{
        foreignKey: 'idUsers'
      });
      Agendas.hasOne(models.Employees,{
        foreignKey: 'idEmployee'
      });
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