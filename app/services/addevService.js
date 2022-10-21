const addevRepo = require("../repositories/addevRepository");

module.exports = {
  findByEmail(email) {
    return addevRepo.repoFindEmail(email);
  },

  findByPK(pk) {
    return addevRepo.repoFindPK(pk);
  },

  listUsers() {
    return addevRepo.repoGetAllUser();
  },
};