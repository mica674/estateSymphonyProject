'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Agendas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
<<<<<<< HEAD
      // console.log(models);

      // Agendas.hasOne(models.User,);
      Agendas.hasOne(models.Employees,{
        foreignKey: 'idEmployee'
      });
=======
      Agendas.belongsTo(models.User);
      Agendas.belongsTo(models.Employees);
>>>>>>> 9496c87545d4924e7d95957cbef12e45a2316bb6
    }
  }
  Agendas.init({
    date: DataTypes.DATE,
    visitInformations: DataTypes.STRING,
    idUsers: DataTypes.INTEGER,
    idEmployee: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Agendas',
  });

  return Agendas;
};