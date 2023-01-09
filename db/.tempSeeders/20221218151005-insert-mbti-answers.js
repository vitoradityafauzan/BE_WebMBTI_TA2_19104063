"use strict";

const answers = [
  {
    answer: "Interact with many, including strangers",
    // point: "e",
    // code_q: 1
  },
  {
    answer: "Interact with a few, known to you",
    // point: "i",
    // code_q: 1
  },
  {
    answer: "Realistic than speculative",
    // point: "s",
    // code_q: 2
  },
  {
    answer: "Speculative than realistic",
    // point: "n",
    // code_q: 2
  },
  {
    answer: "Have your 'head in the clouds'",
    // point: "s",
    // code_q: 3
  },
  {
    answer: "Be 'in a rut'",
    // point: "n",
    // code_q: 3
  },
  {
    answer: "Principles",
    // point: "t",
    // code_q: 4
  },
  {
    answer: "Emotions",
    // point: "f",
    // code_q: 4
  },
  {
    answer: "Convincing",
    // point: "t",
    // code_q: 5
  },
  {
    answer: "Touching",
    // point: "f",
    // code_q: 5
  },
  {
    answer: "To deadlines",
    // point: "j",
    // code_q: 6
  },
  {
    answer: "Just 'whenever'",
    // point: "p",
    // code_q: 6
  },
  {
    answer: "Rather carefully",
    // point: "j",
    // code_q: 7
  },
  {
    answer: "Somewhat impulsively",
    // point: "p",
    // code_q: 7
  },
  {
    answer: "Stay late, with increasing energy",
    // point: "e",
    // code_q: 8
  },
  {
    answer: "Leave early with decreased energy",
    // point: "i",
    // code_q: 8
  },
  {
    answer: "Sensible people",
    // point: "s",
    // code_q: 9
  },
  {
    answer: "Imaginative people",
    // point: "n",
    // code_q: 9
  },
  {
    answer: "What is actual",
    // point: "s",
    // code_q: 10
  },
  {
    answer: "What is possible",
    // point: "n",
    // code_q: 10
  },
  {
    answer: "Laws than circumstances",
    // point: "t",
    // code_q: 11
  },
  {
    answer: "Circumstances than laws",
    // point: "f",
    // code_q: 11
  },
  {
    answer: "Objective",
    // point: "t",
    // code_q: 12
  },
  {
    answer: "Personal",
    // point: "f",
    // code_q: 12
  },
  {
    answer: "Punctual",
    // point: "j",
    // code_q: 13
  },
  {
    answer: "Leisurely",
    // point: "p",
    // code_q: 13
  },
  {
    answer: "Incomplete",
    // point: "j",
    // code_q: 14
  },
  {
    answer: "Completed",
    // point: "p",
    // code_q: 14
  },
  {
    answer: "Keep abreast of other's happenings",
    // point: "e",
    // code_q: 15
  },
  {
    answer: "Get behind on the news",
    // point: "i",
    // code_q: 15
  },
  {
    answer: "Do it the usual way",
    // point: "s",
    // code_q: 16
  },
  {
    answer: "Do it your own way",
    // point: "n",
    // code_q: 16
  },
  {
    answer: "Say what they mean and mean what they say",
    // point: "s",
    // code_q: 17
  },
  {
    answer: "Express things more by use of analogy",
    // point: "n",
    // code_q: 17
  },
  {
    answer: "Consistency of thought",
    // point: "s",
    // code_q: 18
  },
  {
    answer: "Harmonious human relationships",
    // point: "n",
    // code_q: 18
  },
  {
    answer: "Logical judgments",
    // point: "s",
    // code_q: 19
  },
  {
    answer: "Value judgments",
    // point: "n",
    // code_q: 19
  },
  {
    answer: "Settled and decided",
    // point: "s",
    // code_q: 20
  },
  {
    answer: "Unsettled and undecided",
    // point: "n",
    // code_q: 20
  },
  {
    answer: "Serious and determined",
    // point: "s",
    // code_q: 20
  },
  {
    answer: "Easy-going",
    // point: "n",
    // code_q: 20
  },
  {
    answer: "Rarely question that it will all be said",
    // point: "s",
    // code_q: 20
  },
  {
    answer: "Rehearse what you'll say",
    // point: "n",
    // code_q: 20
  },
  {
    answer: "Speak for themselves",
    // point: "s",
    // code_q: 20
  },
  {
    answer: "Illustrate principles",
    // point: "n",
    // code_q: 20
  },
  {
    answer: "Somewhat annoying",
    // point: "s",
    // code_q: 20
  },
  {
    answer: "Rather fascinating",
    // point: "n",
    // code_q: 20
  },
  {
    answer: "a Cool-headed person",
    // point: "s",
    // code_q: 20
  },
  {
    answer: "a Warm-hearted person",
    // point: "n",
    // code_q: 20
  },
  {
    answer: "Unjust",
    // point: "s",
    // code_q: 20
  },
  {
    answer: "Merciless",
    // point: "n",
    // code_q: 20
  },
  {
    answer: "By careful selection and choice",
    // point: "s",
    // code_q: 20
  },
  {
    answer: "Randomly and by chance",
    // point: "n",
    // code_q: 20
  },
  {
    answer: "Having purchased",
    // point: "s",
    // code_q: 20
  },
  {
    answer: "Having the option to buy",
    // point: "n",
    // code_q: 20
  },
  {
    answer: "Initiate conversation",
    // point: "s",
    // code_q: 20
  },
  {
    answer: "Wait to be approached",
    // point: "n",
    // code_q: 20
  },
  {
    answer: "Rarely questionable",
    // point: "s",
    // code_q: 20
  },
  {
    answer: "Frequently questionable",
    // point: "n",
    // code_q: 20
  },
  {
    answer: "Make themselves useful enough",
    // point: "s",
    // code_q: 20
  },
  {
    answer: "Exercise their fantasy enough",
    // point: "n",
    // code_q: 20
  },
  {
    answer: "Standards",
    // point: "s",
    // code_q: 20
  },
  {
    answer: "Feelings",
    // point: "n",
    // code_q: 20
  },
  {
    answer: "Firm than gentle",
    // point: "s",
    // code_q: 20
  },
  {
    answer: "Gentle than firm",
    // point: "n",
    // code_q: 20
  },
  {
    answer: "The ability to organize and be methodical",
    // point: "s",
    // code_q: 20
  },
  {
    answer: "The ability to adapt and make do",
    // point: "n",
    // code_q: 20
  },
  {
    answer: "Infinite",
    // point: "s",
    // code_q: 20
  },
  {
    answer: "Open-minded",
    // point: "n",
    // code_q: 20
  },
  {
    answer: "Stimulate and energize you",
    // point: "s",
    // code_q: 20
  },
  {
    answer: "Tax your reserves",
    // point: "n",
    // code_q: 20
  },
  {
    answer: "A practical sort of person",
    // point: "s",
    // code_q: 20
  },
  {
    answer: "A fanciful sort of person",
    // point: "n",
    // code_q: 20
  },
  {
    answer: "See how others are useful",
    // point: "s",
    // code_q: 20
  },
  {
    answer: "See how others see",
    // point: "n",
    // code_q: 20
  },
  {
    answer: "To discuss an issue thoroughly",
    // point: "s",
    // code_q: 20
  },
  {
    answer: "To arrive at agreement on an issue",
    // point: "n",
    // code_q: 20
  },
  {
    answer: "Your head",
    // point: "s",
    // code_q: 20
  },
  {
    answer: "Your heart",
    // point: "n",
    // code_q: 20
  },
  {
    answer: "Contracted",
    // point: "s",
    // code_q: 20
  },
  {
    answer: "Done on a casual basis",
    // point: "n",
    // code_q: 20
  },
  {
    answer: "The orderly",
    // point: "s",
    // code_q: 20
  },
  {
    answer: "Whatever turns up",
    // point: "n",
    // code_q: 20
  },
  {
    answer: "Many friends with brief contact",
    // point: "s",
    // code_q: 20
  },
  {
    answer: "A few friends with more lengthy contact",
    // point: "n",
    // code_q: 20
  },
  {
    answer: "Facts",
    // point: "s",
    // code_q: 20
  },
  {
    answer: "Principles",
    // point: "n",
    // code_q: 20
  },
  {
    answer: "Production and distribution",
    // point: "s",
    // code_q: 20
  },
  {
    answer: "Design and research",
    // point: "n",
    // code_q: 20
  },
  {
    answer: "'There is a very logical person.'",
    // point: "s",
    // code_q: 20
  },
  {
    answer: "'There is a very sentimental person.'",
    // point: "n",
    // code_q: 20
  },
  {
    answer: "Unwavering",
    // point: "s",
    // code_q: 20
  },
  {
    answer: "Devoted",
    // point: "n",
    // code_q: 20
  },
  {
    answer: "Final and unalterable statement",
    // point: "s",
    // code_q: 20
  },
  {
    answer: "Tentative and preliminary statement",
    // point: "n",
    // code_q: 20
  },
  {
    answer: "After a decision",
    // point: "s",
    // code_q: 20
  },
  {
    answer: "Before a decision",
    // point: "n",
    // code_q: 20
  },
  {
    answer: "Speak easily and at length with strangers",
    // point: "s",
    // code_q: 20
  },
  {
    answer: "Find little to say to strangers",
    // point: "n",
    // code_q: 20
  },
  {
    answer: "Experience",
    // point: "s",
    // code_q: 20
  },
  {
    answer: "Hunch",
    // point: "n",
    // code_q: 20
  },
  {
    answer: "More practical than ingenious",
    // point: "s",
    // code_q: 20
  },
  {
    answer: "More ingenious than practical",
    // point: "n",
    // code_q: 20
  },
  {
    answer: "Clear reason",
    // point: "s",
    // code_q: 20
  },
  {
    answer: "Strong feeling",
    // point: "n",
    // code_q: 20
  },
  {
    answer: "Fair minded",
    // point: "s",
    // code_q: 20
  },
  {
    answer: "Sympathetic",
    // point: "n",
    // code_q: 20
  },
  {
    answer: "Make sure things are arranged",
    // point: "s",
    // code_q: 20
  },
  {
    answer: "Just let things happen",
    // point: "n",
    // code_q: 20
  },
  {
    answer: "Re-negotiable",
    // point: "s",
    // code_q: 20
  },
  {
    answer: "Random and circumstantial",
    // point: "n",
    // code_q: 20
  },
  {
    answer: "Hasten to get to it first",
    // point: "s",
    // code_q: 20
  },
  {
    answer: "Hope someone else will answer",
    // point: "n",
    // code_q: 20
  },
  {
    answer: "A strong sense of reality",
    // point: "s",
    // code_q: 20
  },
  {
    answer: "A vivid imagination",
    // point: "n",
    // code_q: 20
  },
  {
    answer: "Fundamentals",
    // point: "s",
    // code_q: 20
  },
  {
    answer: "Overtones",
    // point: "n",
    // code_q: 20
  },
  {
    answer: "To be too passionate",
    // point: "s",
    // code_q: 20
  },
  {
    answer: "To be too objective",
    // point: "n",
    // code_q: 20
  },
  {
    answer: "Hard-headed",
    // point: "s",
    // code_q: 20
  },
  {
    answer: "Soft-hearted",
    // point: "n",
    // code_q: 20
  },
  {
    answer: "The structured and scheduled",
    // point: "s",
    // code_q: 20
  },
  {
    answer: "The unstructured and unscheduled",
    // point: "n",
    // code_q: 20
  },
  {
    answer: "Routinized than whimsical",
    // point: "s",
    // code_q: 20
  },
  {
    answer: "Whimsical than routinized",
    // point: "n",
    // code_q: 20
  },
  {
    answer: "Easy to approach",
    // point: "s",
    // code_q: 20
  },
  {
    answer: "Somewhat reserved",
    // point: "n",
    // code_q: 20
  },
  {
    answer: "The more literal",
    // point: "s",
    // code_q: 20
  },
  {
    answer: "The more figurative",
    // point: "n",
    // code_q: 20
  },
  {
    answer: "Identify with others",
    // point: "s",
    // code_q: 20
  },
  {
    answer: "Utilize others",
    // point: "n",
    // code_q: 20
  },
  {
    answer: "Clarity of reason",
    // point: "s",
    // code_q: 20
  },
  {
    answer: "Strength of compassion",
    // point: "n",
    // code_q: 20
  },
  {
    answer: "Being indiscriminate",
    // point: "s",
    // code_q: 20
  },
  {
    answer: "Being critical",
    // point: "n",
    // code_q: 20
  },
  {
    answer: "Planned event",
    // point: "s",
    // code_q: 20
  },
  {
    answer: "Unplanned event",
    // point: "n",
    // code_q: 20
  },
  {
    answer: "Deliberate than spontaneous",
    // point: "s",
    // code_q: 20
  },
  {
    answer: "Spontaneous than deliberate",
    // point: "n",
    // code_q: 20
  },
];

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

    let i = 1;
    let q = 1;
    let k = "";
    let t = false;

    for (let j = 0; j < answers.length; j++) {
      if (i  == 1) {
        k = "e";

      } 
      else if (i  == 2) {
        k = "i";
        t = true;

      }
      else if (i  == 3 || i == 5) {
        k = "s";
        
      }
      else if (i  == 4 || i == 6) {
        k = "n";
        t = true;

      }
      else if (i  == 7 || i == 9) {
        k = "t";
        
      }
      else if (i  == 8 || i == 10) {
        k = "f";
        t = true;

      }
      else if (i  == 11 || i == 13) {
        k = "j";
        
      }
      else if (i  == 12 || 14) {
        k = "p";
        t = true;

      }
     /*  else if (i  == 9) {
        k = "p";
        q++;

      } */
      else {
        console.log('Error')
        return;

      }

      toInsert.push({
        answer: answers[j].answer,
        points: k,
        /* code_q: answers[j].code_q, */
        code_q: q,
        createdAt: timestamp,
        updatedAt: timestamp,
      });

      if (t) {
        t = false;
        q++;
      }

      if (i >= 14) {
        i = 1;
      } else {
        i++;
      }
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
