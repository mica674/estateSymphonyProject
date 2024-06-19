'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Messages extends Model {
    static associate(models) {
      Messages.belongsTo(models.Users, {
        foreignKey: 'idUsers',
        as: 'userOwner'
      })
      Messages.belongsTo(models.Users, {
        foreignKey: 'idUsersB',
        as: 'userBuyer'
      })
    }
  }
  Messages.init({
    message: DataTypes.STRING,
    idUsers: DataTypes.INTEGER,
    idUsersB: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Messages',
  });
  return Messages;
};