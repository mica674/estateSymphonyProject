'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Messages extends Model {
    static associate(models) {
      Messages.belongsTo(models.User, {
        foreignKey: 'idUser1',
        as: 'user1'
      })
      Messages.belongsTo(models.User, {
        foreignKey: 'idUser2',
        as: 'user2'
      })
    }
  }
  Messages.init({
    message: DataTypes.STRING,
    idUser1: DataTypes.INTEGER,
    idUser2: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Messages',
  });
  return Messages;
};