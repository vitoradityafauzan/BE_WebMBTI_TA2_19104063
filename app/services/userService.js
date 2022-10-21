const userRepo = require("../repositories/userRepository");

module.exports = {
  findByEmail(email) {
    return userRepo.repoFindEmail(email);
  },

  findByPK(pk) {
    return userRepo.repoFindPK(pk);
  },
};
