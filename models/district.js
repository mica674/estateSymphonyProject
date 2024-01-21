'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class District extends Model {
    static associate(models) {
      District.hasMany(models.Employees_District, {
        foreignKey: 'id',
        as: 'user'
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