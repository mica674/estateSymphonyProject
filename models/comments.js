'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    static associate(models) {
      Comments.belongsTo(models.Users, {
        foreignKey: 'idUsers',
        as: 'userComment'
      });
    }
  };
  Comments.init({
    comment: DataTypes.STRING,
    idUsers: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Comments',
  });
  return Comments;
};