require('dotenv').config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Salt = 10;

class authenticationController {
    static async createToken(data) {
        /* return jwt.sign(data, process.env.JWT_SECRET || "r4h4s14", {
          expiresIn: 2440 * 60,
        }); */
        return jwt.sign(data, process.env.JWT_SECRET, {
          expiresIn: 2440 * 60,
        });
      }

      /* static async verifyToken(token) {
        return jwt.verify(token, process.env.JWT_SECRET);
      } */
      
      static async encryptPassword(password) {
        return new Promise((resolve, reject) => {
          bcrypt.hash(password, Salt, (err, encryptedPassword) => {
            if (!!err) {
              reject(err);
              return;
            }
            resolve(encryptedPassword);
          });
        });
      }
      
      static async checkPassword(encryptedPassword, password) {
        return new Promise((resolve, reject) => {
          bcrypt.compare(password, encryptedPassword, (err, isPasswordCorrect) => {
            if (!!err) {
              reject(err);
              return;
            }
            resolve(isPasswordCorrect);
          });
        });
      }
}

module.exports = authenticationController;