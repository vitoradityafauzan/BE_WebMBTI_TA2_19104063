const { users } = require("../models");

module.exports = {
  repoFindEmail(email) {
    try {
      return users.findOne({
        where: { email },
      });
    } catch (err) {
      throw err.message;
    }
  },

  repoFindPK(id) {
    try {
      return users.findOne({
        where: { id },
      });
    } catch (err) {
      console.log(`REPO ERROR, ${err.message}`);
      return err.message;
    }
  },

  repoCreate(createArgs) {
    try {
      // console.log(`\n ${JSON.stringify(createArgs)} \n`)
      return users.create(createArgs);
    } catch (err) {
      console.log(`REPO ERROR, ${err.message}`);
      return err.message;
    }
  },
};
