'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
<<<<<<< HEAD
      // define association here
=======
>>>>>>> 9496c87545d4924e7d95957cbef12e45a2316bb6
      Role.hasMany(models.User, {
        foreignKey : 'id',
        as:'users'
      })
    }
  }
  Role.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Role',
  });
  return Role;
};