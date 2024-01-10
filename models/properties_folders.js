'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Properties_Folders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Properties_Folders.belongsTo(models.clientFolders,{
      //   foreignKey : 'idClientFolders'
      //})
      Properties_Folders.belongsTo(models.Properties, {
        foreignKey : 'idProperties'
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