const { addevs, users } = require("../models");

module.exports = {
  repoFindEmail(email) {
    try {
      const result = addevs.findOne({
        where: { email },
      });

      /* console.log(`Repo addev find email, ${JSON.stringify(result)}`); */

      return result;
    } catch (err) {
      console.log(`REPO ERROR, ${err.message}`);
      return err.message;
    }
  },

  repoFindPK(id) {
    try {
      return addevs.findOne({
        where: { id },
      });
    } catch (err) {
      console.log(`REPO ERROR, ${err.message}`);
      return err.message;
    }
  },

  repoGetAllUser() {
    try {
      return users.findAll();
    } catch (err) {
      console.log(`REPO ERROR, ${err.message}`);
      return err.message;
    }
  },

  repoCreate(createArgs) {
    try {
      // console.log(`\n ${JSON.stringify(createArgs)} \n`);
      return addevs.create(createArgs);
    } catch (err) {
      console.log(`REPO ERROR, ${err.message}`);
      return err.message;
    }
  },
};
