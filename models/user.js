'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      // define association here
      User.hasMany(models.Agendas, {
        foreignKey: 'idUsers',
        as: 'userAgenda'
      });
      User.hasMany(models.clientFolders, {
        foreignKey: 'idUsers',
        as: 'userClientFolders'
      });
      User.hasMany(models.Comments, {
        foreignKey: 'idUsers',
        as: 'userComment'
      });
      User.hasMany(models.Employees, {
        foreignKey: 'idUsers',
        as: 'userEmployees'
      });
      User.hasMany(models.Estimations, {
        foreignKey: 'idUsers',
        as: 'userEstimation'
      });
      // User.hasMany(models.Favories,{
      //   foreignKey : 'idFavories'
      // });
      // User.hasMany(models.Histories,{
      //   foreignKey : 'idHistories'
      // });
      User.belongsTo(models.Role, {
        foreignKey: 'idRole',
        as: 'role'
      });
      User.hasMany(models.Messages, {
        foreignKey: 'idUser1',
        as: 'user1'
      });
      User.hasMany(models.Messages, {
        foreignKey: 'idUser2',
        as: 'user2'
      })
    }
  }
  User.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    idRole: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};