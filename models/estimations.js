'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Estimations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Estimations.belongsTo(models.User);
    }
  }
  Estimations.init({
    location: DataTypes.STRING,
    houseType: DataTypes.STRING,
    surface: DataTypes.STRING,
    showerRoom: DataTypes.INTEGER,
    room: DataTypes.INTEGER,
    floor: DataTypes.INTEGER,
    balcony: DataTypes.INTEGER,
    parking: DataTypes.STRING,
    idUsers: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Estimations',
  });
  return Estimations;
};