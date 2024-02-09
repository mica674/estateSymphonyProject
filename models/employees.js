'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employees extends Model {
    static associate(models) {
      Employees.belongsTo(models.Users, {
        foreignKey: 'idUsers',
        as: 'userEmployees'
      });
      Employees.hasMany(models.Agendas, {
        foreignKey: 'idEmployees',
        as: 'employeesAgenda'
      });
      Employees.hasMany(models.Employees_District, {
        foreignKey: 'idEmployees',
        as: 'employees_EmployeesDistrict'
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