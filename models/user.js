'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      // define association here
      // User.hasMany(models.Agendas,{
      //   foreignKey : 'idAgenda'
      // });
      // User.hasMany(models.clientFolders,{
      //   foreignKey : 'idClientFolders'
      // });
      // User.hasMany(models.Comments,{
      //   foreignKey : 'idComments'
      // });
      // User.hasMany(models.Employees,{
      //   foreignKey : 'idEmployees'
      // });
      User.hasMany(models.Estimations, {
        foreignKey: 'id',
        as: 'estimations'
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
      })
      // User.hasMany(models.Messages,{
      //   foreignKey : 'idMessages'
      // })
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