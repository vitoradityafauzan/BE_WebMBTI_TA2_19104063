'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mbti_answers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  mbti_answers.init({
    answer: DataTypes.STRING,
    points: DataTypes.STRING,
    code_q: DataTypes.INTEGER,
    code_c: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'mbti_answers',
  });
  return mbti_answers;
};