'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class characteristic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      characteristic.hasMany(models.mbti_answers, { foreignKey: 'code_c' })
    }
  }
  characteristic.init({
    char_type: DataTypes.STRING,
    group_type: DataTypes.STRING,
    group_desc: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'characteristic',
  });
  return characteristic;
};