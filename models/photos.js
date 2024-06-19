'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Photos extends Model {
    static associate(models) {
      Photos.belongsTo(models.Properties, {
        foreignKey: 'idProperties',
        as: 'property'
      })
    }
  }
  Photos.init({
    photo: DataTypes.STRING,
    idProperties: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Photos',
  });
  return Photos;
};