'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {

    static associate(models) {
      // define association here
      Users.hasMany(models.Agendas, {
        foreignKey: 'idUsers',
        as: 'userAgenda'
      });
      Users.hasMany(models.clientFolders, {
        foreignKey: 'idUsers',
        as: 'userClientFolders'
      });
      Users.hasMany(models.Comments, {
        foreignKey: 'idUsers',
        as: 'userComment'
      });
      Users.hasMany(models.Employees, {
        foreignKey: 'idUsers',
        as: 'userEmployees'
      });
      Users.hasMany(models.Estimations, {
        foreignKey: 'idUsers',
        as: 'userEstimation'
      });
      Users.hasMany(models.Favories, {
        foreignKey: 'idUsers',
        as: 'userFavories'
      });
      Users.hasMany(models.Histories, {
        foreignKey: 'idUsers',
        as: 'userHistories'
      });
      Users.belongsTo(models.Roles, {
        foreignKey: 'idRoles',
        as: 'role'
      });
      Users.hasMany(models.Messages, {
        foreignKey: 'idUser',
        as: 'user1'
      });
      Users.hasMany(models.Messages, {
        foreignKey: 'idUserB',
        as: 'user2'
      })
    }
  }
  Users.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    idRoles: DataTypes.INTEGER,
    archived: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};