'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mbti_personality extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      /* mbti_personality.hasMany(models.mbti_answers, { foreignKey: 'code_p' }) */
    }
  }
  mbti_personality.init({
    code_p: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    type: DataTypes.STRING,
    title: DataTypes.STRING,
    characteristics: DataTypes.STRING,
    percentage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'mbti_personality',
  });
  return mbti_personality;
};