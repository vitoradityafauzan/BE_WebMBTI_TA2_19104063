'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Universitas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      /* Universitas.hasMany(models.Prodi_Lists, { foreignKey: 'id_uni' }) */
    }
  }
  Universitas.init({
    nama_uni: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Universitas',
  });
  return Universitas;
};