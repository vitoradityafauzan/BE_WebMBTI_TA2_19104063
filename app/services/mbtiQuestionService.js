const mbtiQ = require("../repositories/mbtiQuestionRepository");

module.exports = {
  create(q) {
    return mbtiQ.repoCreate(q);
  },
  
  lists() {
    return mbtiQ.repoListQuestion();
  },

  find(q) {
    return mbtiQ.repoFindQuestion(q)
  },

  delete(q) {
    return mbtiQ.repoDeleteQuestion(q);
  }
}