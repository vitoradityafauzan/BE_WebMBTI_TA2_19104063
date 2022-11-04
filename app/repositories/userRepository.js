const { users } = require("../models");

module.exports = {
  repoFindEmail(email) {
    try{
      return users.findOne({
        where: { email },
      })
    } catch (err) {
      throw err.message
    }
    
  },
  
  repoFindPK(id) {
    return users.findOne({
      where: { id },
    });
  },

  repoCreate(createArgs) {
    try {
      // console.log(`\n ${JSON.stringify(createArgs)} \n`)
      return users.create(createArgs);
    }catch (err) {
      return err.message
    }
  },
};
