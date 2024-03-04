'use strict';
const {
  Model
} = require('sequelize');
const employees = require('./employees');
module.exports = (sequelize, DataTypes) => {
  class Employees_Districts extends Model {
    static associate(models) {
      Employees_Districts.belongsTo(models.Employees, {
        foreignKey: 'idEmployees',
        as: 'employee'
      });
      Employees_Districts.belongsTo(models.Districts, {
        foreignKey: 'idDistricts',
        as: 'district'
      });
    }
  }
  Employees_Districts.init({
    idDistricts: DataTypes.INTEGER,
    idEmployees: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Employees_Districts',
  });
  return Employees_Districts;
};