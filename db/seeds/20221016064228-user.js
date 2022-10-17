'use strict';

const { Op } = require("sequelize");
const bcrypt = require("bcryptjs");

const listUsernames = [
  "testUser1",
  "testUser2",
  "testUser3"
]

module.exports = {
  async up (queryInterface, Sequelize) {
    const pass = "qwerty";
    const encryptedPassword = bcrypt.hashSync(pass, 10);
    const resVia = "web";
    const timestamp = new Date();

    const toInsert = listUsernames.map((username) => ({
      username,
      email: `${username.toLowerCase()}@test.co.id`,
      password: encryptedPassword,
      googleid: "",
      registeredvia: resVia,
      gambar: "",
      createdAt: timestamp,
      updatedAt: timestamp
    }))
  
    await queryInterface.bulkInsert('users', toInsert, {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('users', { username: { [Op.in]: listUsernames } }, {});
  }
};
