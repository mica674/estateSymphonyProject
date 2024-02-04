'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Status extends Model {
    static associate(models) {
      Status.hasMany(models.Properties, {
        foreignKey: 'id',
        as: 'property'
      })
    }
  }
  Status.init({
    sold: DataTypes.BOOLEAN,
    rent: DataTypes.BOOLEAN,
    hidden: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Status',
  });
  return Status;
};