/**
 * @file contains entry point of controllers api v1 module
 * @author Vito Raditya Fauzan
 */

// const postController = require("./postController");
const userController = require("./userController")
const addevController = require("./addevController")
const mbtiTestController = require("./mbtiTestController")

module.exports = {
  userController,
  addevController,
  mbtiTestController,
};
