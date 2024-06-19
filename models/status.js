'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Statuses extends Model {
    static associate(models) {
      Statuses.hasMany(models.Properties, {
        foreignKey: 'idStatuses',
        as: 'property'
      })
    }
  }
  Statuses.init({
    sold: DataTypes.BOOLEAN,
    rent: DataTypes.BOOLEAN,
    hidden: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Statuses',
  });
  return Statuses;
};