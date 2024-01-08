'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Photos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Photos.belongsTo(models.Properties, {
        foreignKey : 'idProperties'
      })
    }
  }
  Photos.init({
    photo: DataTypes.STRING,
    idProperties: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Photos',
  });
  return Photos;
};