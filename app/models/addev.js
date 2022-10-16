'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class addev extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  addev.init({
    id: DataTypes.INTEGER,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    googleid: DataTypes.STRING,
    registeredvia: DataTypes.STRING,
    is_super: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'addev',
  });
  return addev;
};