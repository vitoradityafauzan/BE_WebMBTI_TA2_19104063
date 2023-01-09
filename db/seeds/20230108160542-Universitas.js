"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    const timestamp = new Date();

    let toInsert = [
      { nama_uni: "Institut Teknologi Telkom Purwokerto (ITTP)", createdAt: timestamp, updatedAt: timestamp },
      { nama_uni: "Universitas Jenderal Soedirman (Unsoed)", createdAt: timestamp, updatedAt: timestamp },
    ];

    await queryInterface.bulkInsert("Universitas", toInsert, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("Universitas", null, {});
  },
};
