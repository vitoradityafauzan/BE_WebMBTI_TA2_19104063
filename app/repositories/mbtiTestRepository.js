const { mbti_question, mbti_answers, mbti_personality, users_test_answers } = require("../models");

module.exports = {
  repoCreateQuestion(createArgs) {
    try {
        // console.log(`\n ${JSON.stringify(createArgs)} \n`);
        return mbti_question.create(createArgs);

    } catch (err) {
        console.log(`REPO ERROR, ${err.message}`);
        return err.message;

      }
  },

  repoFindQuestion(question) {
    try {
      const result = mbti_question.findOne({
        where: { question },
      });
      return result;

    } catch (err) {
      console.log(`REPO ERROR, ${err.message}`);
      return err.message;
      
    }
  },

  repoListQuestion() {
    try {
        return mbti_question.findAll();

    } catch (err) {
      console.log(`REPO ERROR, ${err.message}`);
      return err.message;
      
    }
  },

  repoDeleteQuestion(code) {
    try {
      // console.log(code)
        return mbti_question.destroy({ where: { code_q: code } });

    } catch (err) {
      console.log(`REPO ERROR, ${err.message}`);
      return err.message;
      
    }
  },

  repoCreateAnswer(createArgs) {
    try {
        // console.log(`\n ${JSON.stringify(createArgs)} \n`);
        return mbti_answers.create(createArgs);

    } catch (err) {
        console.log(`REPO ERROR, ${err.message}`);
        return err.message;

      }
  },

  repoFindAnswer(question) {
    try {
      const result = mbti_answers.findOne({
        where: { question },
      });
      return result;

    } catch (err) {
      console.log(`REPO ERROR, ${err.message}`);
      return err.message;
      
    }
  },

  repoListAnswers() {
    try {
        return mbti_answers.findAll();

    } catch (err) {
      console.log(`REPO ERROR, ${err.message}`);
      return err.message;
      
    }
  },

  repoDeleteAnswer(code) {
    try {
      // console.log(code)
        return mbti_answers.destroy({ where: { code_q: code } });

    } catch (err) {
      console.log(`REPO ERROR, ${err.message}`);
      return err.message;
      
    }
  },

  repoListChar() {
    try {
      return mbti_personality.findAll();
      
    } catch (error) {
      console.log(`REPO ERROR, ${err.message}`);
      return err.message;
    }
  },

  repoSubmitAnswer(id, char) {
    try {
      return users_test_answers.create({id_user: id, testVia: 'mbti', code_a: char})
    } catch (error) {
      
    }
  }

};
