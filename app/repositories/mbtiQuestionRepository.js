const { mbti_question } = require("../models");

module.exports = {
  repoCreate(createArgs) {
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

};
