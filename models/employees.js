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
      // define association here
    }
  }
  Employees.init({
    descriptions: DataTypes.STRING,
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    inventoryId: DataTypes.INTEGER,
    districtId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Employees',
  });
  return Employees;
};