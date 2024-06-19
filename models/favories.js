'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favories extends Model {
    static associate(models) {
      Favories.belongsTo(models.Users, {
        foreignKey: 'idUsers',
        as: 'user'
      });
      Favories.belongsTo(models.Properties, {
        foreignKey: 'idProperties',
        as: 'property'
      });
    }
  }
  Favories.init({
    idUsers: DataTypes.INTEGER,
    idProperties: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Favories',
  });
  return Favories;
};