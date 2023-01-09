const mbtiQ = require("../repositories/mbtiTestRepository");

module.exports = {
  createQ(q) {
    return mbtiQ.repoCreateQuestion(q);
  },
  
  listsQ() {
    return mbtiQ.repoListQuestion();
  },

  findQ(q) {
    return mbtiQ.repoFindQuestion(q)
  },

  deleteQ(q) {
    return mbtiQ.repoDeleteQuestion(q);
  },

  createA(q) {
    return mbtiQ.repoCreateAnswer(q);
  },
  
  listsA() {
    return mbtiQ.repoListAnswers();
  },

  findA(q) {
    return mbtiQ.repoFindAnswer(q)
  },

  deleteA(q) {
    return mbtiQ.repoDeleteAnswer(q);
  },

  listsChar() {
    return mbtiQ.repoListChar();
  },

  submitAnswer(id, char) {
    return mbtiQ.repoSubmitAnswer(id, char);
  },

  listUni() {
    /* const result = {universitas: mbtiQ.repoListUni(), prodi: mbtiQ.repoListProdi()}
    return result; */
    return mbtiQ.repoListUni();
  },

  listProdi() {
    return mbtiQ.repoListProdi();
  }
}