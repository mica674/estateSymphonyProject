'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Messages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Messages.belongsTo(models.User, {
      //   foreignKey : 'userId'
      // })
      // Messages.belongsTo(models.User, {
      //   foreignKey : 'userId2'
      // })
    }
  }
  Messages.init({
    message: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    userId2: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Messages',
  });
  return Messages;
};