'use strict';

const { Op } = require("sequelize");
const bcrypt = require("bcryptjs");

const listUser = [
  "Admin-01",
  "Super-01"
]

module.exports = {
  async up (queryInterface, Sequelize) {
    const pass = "4dm1nadmin";
    const encryptedPassword = bcrypt.hashSync(pass, 10);
    const timestamp = new Date();

    const toInsert = [{
      username: listUser[0],
      email: "admin01@test.co.id",
      password: encryptedPassword,
      googleid: "",
      is_super: "false",
      createdAt: timestamp,
      updatedAt: timestamp
    },{
      username: listUser[1],
      email: "super01@test.co.id",
      password: encryptedPassword,
      googleid: "",
      is_super: "true",
      createdAt: timestamp,
      updatedAt: timestamp
    }]

    await queryInterface.bulkInsert('addevs', toInsert, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('addevs', { username: { [Op.in]: listUser } }, {});
  }
};
