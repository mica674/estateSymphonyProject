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
<<<<<<< HEAD
     // clientFolders.hasOne(models.User);
=======
      clientFolders.belongsTo(models.User)
>>>>>>> 9496c87545d4924e7d95957cbef12e45a2316bb6
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