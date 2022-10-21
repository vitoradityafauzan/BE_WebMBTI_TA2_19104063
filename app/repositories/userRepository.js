const { users } = require("../models");

module.exports = {
  repoFindEmail(email) {
    return users.findOne({
      where: { email },
    });
  },
  
  repoFindPK(id) {
    return users.findOne({
      where: { id },
    });
  },

  repoCreate(createArgs) {
    try {
      console.log(`\n ${JSON.stringify(createArgs)} \n`)
      return users.create(createArgs);
    }catch (err) {
      return err.message
    }
  },
};
