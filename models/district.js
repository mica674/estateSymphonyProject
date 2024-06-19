'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Districts extends Model {
    static associate(models) {
      Districts.hasMany(models.Employees_Districts, {
        foreignKey: 'idDistricts',
        as: 'district_EmployeesDistrict'
      });
      Districts.hasMany(models.Properties, {
        foreignKey: 'idDistricts',
        as: 'properties'
      })
    }
  }
  Districts.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Districts'
  });
  return Districts;
};