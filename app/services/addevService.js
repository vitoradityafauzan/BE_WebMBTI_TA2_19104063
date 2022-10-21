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

  create(reqBody) {
    console.log(`\n ${JSON.stringify(reqBody)} \n`);
    return addevRepo.repoCreate(reqBody)
  },
};