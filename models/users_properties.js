'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users_Properties extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users_Properties.belongsTo(models.User, {
        foreignKey : 'idUsers'
      });
      Users_Properties.belongsTo(models.User, {
        foreignKey : 'idUsers1'
      });
      Users_Properties.belongsTo(models.Properties,{
        foreignKey : 'idProperties'
      })
    }
  }
  Users_Properties.init({
    idUsers: DataTypes.INTEGER,
    idProperties: DataTypes.INTEGER,
    idUsers1: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Users_Properties',
  });
  return Users_Properties;
};