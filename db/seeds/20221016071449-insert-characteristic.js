'use strict';

const { Op } = require("sequelize");

const charNames = [
  "Introvert",
  "Ekstrovert",
  "Intuition",
  "Sensing",
  "Feeling",
  "Thinking",
  "Perceiving",
  "Judging"
]

const groupTypes = [
  "Active Based",
  "Processing Information Based",
  "Decision Making Based",
  "Steps Making or Strategy Making Based"
]

module.exports = {
  // eslint-disable-next-line no-unused-vars
  async up (queryInterface, Sequelize) {
    const timestamp = new Date();
    let toInsert = [];
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    
    for (let i = 0; i < groupTypes.length; i++) {
      for (let j=0;j<=1;j++) {
        toInsert.push({
          char_type: charNames[j],
          group_type: groupTypes[i],
          group_desc: "",
          createdAt: timestamp,
          updatedAt: timestamp
        })
      }
      charNames.splice(0, 2);
    }

    await queryInterface.bulkInsert('characteristics', toInsert, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('characteristics', { char_type: { [Op.in]: charNames } }, {});
  }
};
