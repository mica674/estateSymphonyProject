'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Histories extends Model {
    static associate(models) {
      Histories.belongsTo(models.Users, {
        foreignKey: 'idUsers',
        as: 'user'
      });
      Histories.belongsTo(models.Properties, {
        foreignKey: 'idProperties',
        as: 'property'
      });
    }
  }
  Histories.init({
    idUsers: DataTypes.INTEGER,
    idProperties: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Histories',
  });
  return Histories;
};