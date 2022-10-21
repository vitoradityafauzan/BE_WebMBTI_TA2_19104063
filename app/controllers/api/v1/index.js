/**
 * @file contains entry point of controllers api v1 module
 * @author Fikri Rahmat Nurhidayat
 */

// const postController = require("./postController");
const userController = require("./userController")
const addevController = require("./addevController")

module.exports = {
  userController,
  addevController,
};
