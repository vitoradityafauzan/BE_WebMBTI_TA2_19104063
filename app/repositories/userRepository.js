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
};
