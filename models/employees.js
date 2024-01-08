'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employees extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Employees.hasOne(models.User,{
        foreignKey: 'idUser'
      });
      Employees.hasMany(models.Agendas,{
        foreignKey : 'idAgenda'
      });
      Employees.hasMany(models.Employees_District,{
        foreignKey : 'idEmployees_District'
      });
    }
  }
  Employees.init({
    descriptions: DataTypes.STRING,
    name: DataTypes.STRING,
    idUsers: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Employees',
  });
  return Employees;
};