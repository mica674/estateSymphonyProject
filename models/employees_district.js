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
    idDistricts: { type: DataTypes.INTEGER, unique: true },
    idEmployees: { type: DataTypes.INTEGER, unique: true }
  }, {
    sequelize,
    modelName: 'Employees_Districts',
  });
  return Employees_Districts;
};