"use strict";

const { Op } = require("sequelize");

const charNames = [
  {
    type: "ISTJ",
    title: "The Traditionalist",
    percentage: "13.7%",
    description: "Dutiful, Practical, Logical, Methodical",
  },
  {
    type: "ISFJ",
    title: "The Protector",
    percentage: "12.7%",
    description: "Dutiful, Practical, Supportive, Meticulous",
  },
  {
    type: "INFJ",
    title: "The Guide",
    percentage: "1.7%",
    description: "Devoted, Innovative, Idealistic, Compassionate",
  },
  {
    type: "INTJ",
    title: "The Visionary",
    percentage: "1.4%",
    description: "Independent, Innovative, Analytical, Purposeful",
  },
  {
    type: "ISTP",
    title: "The Problem-Solver",
    percentage: "6.4%",
    description: "Expedient, Practical, Objective, Adaptable",
  },
  {
    type: "ISFP",
    title: "The Harmonizer",
    percentage: "6.1%",
    description: "Tolerant, Realistic, Harmonious, Adaptable",
  },
  {
    type: "INFP",
    title: "The Humanist",
    percentage: "3.2%",
    description: "Insightful, Innovative, Idealistic, Adaptable",
  },
  {
    type: "INTP",
    title: "The Conceptualizer",
    percentage: "2.4%",
    description: "Questioning, Innovative, Objective, Abstract",
  },
  {
    type: "ESTP",
    title: "The Activist",
    percentage: "5.8%",
    description: "Energetic, Practical, Pragmatic, Spontaneous",
  },
  {
    type: "ESFP",
    title: "The Fun-Lover",
    percentage: "8.7%",
    description: "Spontaneous, Practical, Friendly, Harmonious",
  },
  {
    type: "ENFP",
    title: "The Enthusiast",
    percentage: "6.3%",
    description: "Optimistic, Innovative, Compassionate, Versatile",
  },
  {
    type: "ENTP",
    title: "The Entrepreneur",
    percentage: "2.8%",
    description: "Risk-Taking, Innovative, Outgoing, Adaptable",
  },
  {
    type: "ESTJ",
    title: "The Coordinator",
    percentage: "10.4%",
    description: "Organized, Practical, Logical, Outgoing",
  },
  {
    type: "ESFJ",
    title: "The Supporter",
    percentage: "12.6%",
    description: "Friendly, Practical, Loyal, Organized",
  },
  {
    type: "ENFJ",
    title: "The Developer",
    percentage: "2.8%",
    description: "Friendly, Innovative, Supportive, Idealistic",
  },
  {
    type: "ENTJ",
    title: "The Reformer",
    percentage: "2.9%",
    description: "Determined, Innovative, Strategic, Outgoing",
  },
];

const groupTypes = ["Active Based", "Processing Information Based", "Decision Making Based", "Steps Making or Strategy Making Based"];

module.exports = {
  // eslint-disable-next-line no-unused-vars
  async up(queryInterface, Sequelize) {
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
      for (let j = 0; j <= 1; j++) {
        toInsert.push({
          char_type: charNames[j],
          group_type: groupTypes[i],
          group_desc: "",
          createdAt: timestamp,
          updatedAt: timestamp,
        });
      }
      charNames.splice(0, 2);
    }

    await queryInterface.bulkInsert("characteristics", toInsert, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("characteristics", { char_type: { [Op.in]: charNames } }, {});
  },
};
