'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Properties_Folders extends Model {

    static associate(models) {
      Properties_Folders.belongsTo(models.clientFolders, {
        foreignKey: 'idClientFolders',
        as: 'idClientFolder'
      })
      Properties_Folders.belongsTo(models.Properties, {
        foreignKey: 'idProperties',
        as: 'idProperty'
      })
    }
  }
  Properties_Folders.init({
    idProperties: DataTypes.INTEGER,
    idClientFolders: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Properties_Folders',
  });
  return Properties_Folders;
};