'use strict';

const pertanyaan = [
  "At a party do you",
  "Are you more",
  "Is it worse to",
  "Are you more impressed by",
  "Are more drawn toward the",
  "Do you prefer to work",
  "Do you tend to choose",
  "At parties do you",
  "Are you more attracted to",
  "Are you more interested in",
  "In judging others are you more swayed by",
  "In approaching others is your inclination to be somewhat",
  "Are you more",
  "Does it bother you more having things",
  "In your social groups do you",
  "In doing ordinary things are you more likely to",
  "Writers should",
  "Which appeals to you more",
  "Are you more comfortable in making",
  "Do you want things",
  "Would you say you are more",
  "In phoning do you",
  "Below is a Fact",
  "Are visionaries",
  "Are you more often",
  "Is it worse to be",
  "Should one usually let events occur",
  "Do you feel better about",
  "In company do you",
  "Common sense is",
  "Children often do not",
  "In making decisions do you feel more comfortable with",
  "Are you more",
  "Which is more admirable",
  "Do you put more value on",
  "Does new and non-routine interaction with others",
  "Are you more frequently",
  "Are you more likely to",
  "Which is more satisfying",
  "Which rules you more",
  "Are you more comfortable with work that is",
  "Do you tend to look for",
  "Do you prefer",
  "Do you go more by",
  "Are you more interested in",
  "Which is more of a compliment",
  "Do you value in yourself more that you are",
  "Do you more often prefer the",
  "Are you more comfortable",
  "Do you",
  'Are you more likely to trust your',
  'Do you feel',
  ''


]

module.exports = {
  async up (queryInterface, Sequelize) {
    const timestamp = new Date();
    let toInsert = [];

    for (let i=0;i<pertanyaan.length;i++) {
      toInsert.push({
        question: pertanyaan[i],
        createdAt: timestamp,
        updatedAt: timestamp
      })
    }

    await queryInterface.bulkInsert('mbti_questions', toInsert, {});
  },

  async down (queryInterface, Sequelize) {


    await queryInterface.bulkDelete('mbti_questions', null, {});
  }
};
