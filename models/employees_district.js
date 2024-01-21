'use strict';
const {
  Model
} = require('sequelize');
const employees = require('./employees');
module.exports = (sequelize, DataTypes) => {
  class Employees_District extends Model {
    static associate(models) {
      Employees_District.belongsTo(models.Employees, {
        foreignKey: 'idEmployees',
        as: 'employees'
      });
      Employees_District.belongsTo(models.District, {
        foreignKey: 'idDistrict',
        as: 'district'
      });
    }
  }
  Employees_District.init({
    idDistrict: DataTypes.INTEGER,
    idEmployees: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Employees_District',
  });
  return Employees_District;
};