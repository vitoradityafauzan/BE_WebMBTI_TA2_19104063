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
    let toInsert = [];

    for (let j = 0; j < mainData.length; j++) {
      toInsert.push({
        answer: "",
        points: "",
        code_q: "",
        code_p: "",
        createdAt: timestamp,
        updatedAt: timestamp,
      });
    }

    await queryInterface.bulkInsert("mbti_answers", toInsert, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("mbti_answers", null, {});
  },
};
