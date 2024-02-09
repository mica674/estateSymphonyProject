'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Messages extends Model {
    static associate(models) {
      Messages.belongsTo(models.Users, {
        foreignKey: 'idUser',
        as: 'userOwner'
      })
      Messages.belongsTo(models.Users, {
        foreignKey: 'idUserB',
        as: 'userBuyer'
      })
    }
  }
  Messages.init({
    message: DataTypes.STRING,
    idUser: DataTypes.INTEGER,
    idUserB: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Messages',
  });
  return Messages;
};