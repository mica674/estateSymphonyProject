'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class District extends Model {
    static associate(models) {
      District.hasMany(models.Employees_District, {
        foreignKey: 'idDistrict',
        as: 'district_EmployeesDistrict'
      });
      District.hasMany(models.Properties, {
        foreignKey: 'id',
        as: 'properties'
      })
    }
  }
  District.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'District'
  });
  return District;
};