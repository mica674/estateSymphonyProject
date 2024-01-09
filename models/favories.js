'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Favories.belongsTo(models.User);
      Favories.hasOne(models.Properties,{
        foreignKey: 'idProperties'
      });
    }
  }
  Favories.init({
    idUsers: DataTypes.INTEGER,
    idProperties: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Favories',
  });
  return Favories;
};