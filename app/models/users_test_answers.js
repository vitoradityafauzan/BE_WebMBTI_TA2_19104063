'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users_test_answers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users_test_answers.init({
    id_user: DataTypes.INTEGER,
    testVia: DataTypes.STRING,
    code_a: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'users_test_answers',
  });
  return users_test_answers;
};