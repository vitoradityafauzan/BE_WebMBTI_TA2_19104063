'use strict';

// const { Op } = require("sequelize");

const mainData = [
  {
    type: "ISTJ",
    title: "The Duty Fulfiller",
    percentage: "13.7%",
    chars: "Dutiful, Practical, Logical, Methodical",
  },
  {
    type: "ISFJ",
    title: "The Nurturer",
    percentage: "12.7%",
    chars: "Dutiful, Practical, Supportive, Meticulous",
  },
  {
    type: "INFJ",
    title: "The Protector",
    percentage: "1.7%",
    chars: "Devoted, Innovative, Idealistic, Compassionate",
  },
  {
    type: "INTJ",
    title: "The Scientist",
    percentage: "1.4%",
    chars: "Independent, Innovative, Analytical, Purposeful",
  },
  {
    type: "ISTP",
    title: "The Mechanic",
    percentage: "6.4%",
    chars: "Expedient, Practical, Objective, Adaptable",
  },
  {
    type: "ISFP",
    title: "The Artist",
    percentage: "6.1%",
    chars: "Tolerant, Realistic, Harmonious, Adaptable",
  },
  {
    type: "INFP",
    title: "The Idealist",
    percentage: "3.2%",
    chars: "Insightful, Innovative, Idealistic, Adaptable",
  },
  {
    type: "INTP",
    title: "The Thinker",
    percentage: "2.4%",
    chars: "Questioning, Innovative, Objective, Abstract",
  },
  {
    type: "ESTP",
    title: "The Doer",
    percentage: "5.8%",
    chars: "Energetic, Practical, Pragmatic, Spontaneous",
  },
  {
    type: "ESFP",
    title: "The Performer",
    percentage: "8.7%",
    chars: "Spontaneous, Practical, Friendly, Harmonious",
  },
  {
    type: "ENFP",
    title: "The Inspirer",
    percentage: "6.3%",
    chars: "Optimistic, Innovative, Compassionate, Versatile",
  },
  {
    type: "ENTP",
    title: "The Visionary",
    percentage: "2.8%",
    chars: "Risk-Taking, Innovative, Outgoing, Adaptable",
  },
  {
    type: "ESTJ",
    title: "The Guardian",
    percentage: "10.4%",
    chars: "Organized, Practical, Logical, Outgoing",
  },
  {
    type: "ESFJ",
    title: "The Caregiver",
    percentage: "12.6%",
    chars: "Friendly, Practical, Loyal, Organized",
  },
  {
    type: "ENFJ",
    title: "The Giver",
    percentage: "2.8%",
    chars: "Friendly, Innovative, Supportive, Idealistic",
  },
  {
    type: "ENTJ",
    title: "The Executive",
    percentage: "2.9%",
    chars: "Determined, Innovative, Strategic, Outgoing",
  },
];
module.exports = {
  async up (queryInterface, Sequelize) {
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
        type: mainData[j].type,
        title: mainData[j].title,
        characteristics: mainData[j].chars,
        percentage: mainData[j].percentage,
        createdAt: timestamp,
        updatedAt: timestamp,
      });
    }

    await queryInterface.bulkInsert("mbti_personalities", toInsert, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("mbti_personalities", null, {});
  }
};
