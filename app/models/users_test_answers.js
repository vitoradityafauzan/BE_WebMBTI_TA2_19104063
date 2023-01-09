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

      users_test_answers.belongsTo(models.users, { foreignKey: 'id_user' })
    }
  }
  users_test_answers.init({
    id_user: DataTypes.INTEGER,
    testVia: DataTypes.STRING,
    result: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users_test_answers',
  });
  return users_test_answers;
};
/* lorem ipsum dolor sit amet auf de heiden blut ein kleines me lein, und das heist, erika. haiz von hunderstazen kleinen bienelien. jh*/