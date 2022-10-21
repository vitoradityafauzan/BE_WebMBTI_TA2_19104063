const { addevs, users } = require("../models");

module.exports = {
  repoFindEmail(email) {
    return addevs.findOne({
      where: { email },
    });
  },

  repoFindPK(id) {
    return addevs.findOne({
      where: { id },
    });
  },

  repoGetAllUser() {
    return users.findAll();;
  },

  repoCreate(createArgs) {
    console.log(`\n ${JSON.stringify(createArgs)} \n`)
      return addevs.create(createArgs);
  },
};
