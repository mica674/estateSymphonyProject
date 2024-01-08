'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Histories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Histories.hasOne(models.User,{
        foreignKey: 'idUsers'
      });
      Histories.hasOne(models.Properties,{
        foreignKey: 'idProperties'
      });
    }
  }
  Histories.init({
    idUsers: DataTypes.INTEGER,
    idProperties: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Histories',
  });
  return Histories;
};