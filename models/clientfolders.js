'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class clientFolders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      clientFolders.hasOne(models.User,{
        foreignKey: 'idUsers'
      });
    }
  }
  clientFolders.init({
    name: DataTypes.STRING,
    pdf: DataTypes.STRING,
    idUsers: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'clientFolders',
  });
  return clientFolders;
};