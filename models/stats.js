'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Stats.init({
    sold: DataTypes.INTEGER,
    signed: DataTypes.INTEGER,
    clicCount: DataTypes.INTEGER,
    idEmployee: DataTypes.INTEGER,
    idProperties: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Stats',
  });
  return Stats;
};