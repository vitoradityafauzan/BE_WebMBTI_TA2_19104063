'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Prodi_List extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      /* Prodi_List.belongsTo(models.Universitas, { foreignKey: 'id_uni' }) */
    }
  }
  Prodi_List.init({
    nama_prodi: DataTypes.STRING,
    fakultas: DataTypes.STRING,
    link: DataTypes.STRING,
    id_uni: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Prodi_List',
  });
  return Prodi_List;
};