const { users, users_test_answers } = require("../models");

module.exports = {
  repoFindEmail(email) {
    try {
      let result = users.findOne({
        where: { email },
      });

     /*  console.log('user repo, ')
      console.log(result) */

      return result;

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
