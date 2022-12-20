"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("characteristics", {
      code_c: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      char_type: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      char_title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      percentage: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      wolrdPercentage: {
        allowNull: false, 
        type: Sequelize.FLOAT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("characteristics");
  },
};
