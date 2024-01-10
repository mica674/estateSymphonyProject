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
<<<<<<< HEAD
      // Favories.hasOne(models.User,{
      //   foreignKey: 'idUsers'
      //});
=======
      Favories.belongsTo(models.User);
>>>>>>> 9496c87545d4924e7d95957cbef12e45a2316bb6
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