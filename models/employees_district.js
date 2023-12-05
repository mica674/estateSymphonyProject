'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employees_District extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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