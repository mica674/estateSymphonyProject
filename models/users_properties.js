'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users_Properties extends Model {
    static associate(models) {
      Users_Properties.belongsTo(models.Users, {
        foreignKey: 'idUsers',
        as: 'userOwner'
      });
      Users_Properties.belongsTo(models.Users, {
        foreignKey: 'idUsersB',
        as: 'userBuyer'
      });
      Users_Properties.belongsTo(models.Properties, {
        foreignKey: 'idProperties'
      })
    }
  }
  Users_Properties.init({
    idUsers: DataTypes.INTEGER,
    idProperties: DataTypes.INTEGER,
    idUsersB: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Users_Properties',
  });
  return Users_Properties;
};