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
      mbti_answers.hasMany(models.users_test_answers, { foreignKey: 'code_a' })
      mbti_answers.belongsTo(models.mbti_question, { foreignKey: 'code_q' })
      mbti_answers.belongsTo(models.mbti_personality, { foreignKey: 'code_p' })
    }
  }
  mbti_answers.init({
    code_a: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    answer: DataTypes.STRING,
    points: DataTypes.STRING,
    code_q: DataTypes.INTEGER,
    code_p: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'mbti_answers',
  });
  return mbti_answers;
};