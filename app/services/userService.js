const userRepo = require("../repositories/userRepository");

module.exports = {
  findByEmail(email) {
    return userRepo.repoFindEmail(email);
  },

  findByPK(pk) {
    return userRepo.repoFindPK(pk);
  },

  create(reqBody) {
    console.log(`\n ${JSON.stringify(reqBody)} \n`);
    return userRepo.repoCreate(reqBody)
  },
};
