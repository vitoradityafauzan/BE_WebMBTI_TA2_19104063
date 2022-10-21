/* const bcrypt = require("bcryptjs");*/
const jwt = require("jsonwebtoken"); 
const { users } = require("../../../models");
const userService = require("../../../services/userService")
const jwtAuth = require("./authenticationController")
//const Salt = 10;
 
/* Create token function */
/* function createToken(data) {
  return jwt.sign(data, process.env.JWT_SECRET || "r4h4s14", {
    expiresIn: 2440 * 60,
  });
}

function encryptPassword(password) {
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

function checkPassword(encryptedPassword, password) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, encryptedPassword, (err, isPasswordCorrect) => {
      if (!!err) {
        reject(err);
        return;
      }
      resolve(isPasswordCorrect);
    });
  });
} */

class userController {
  static async register(req, res) {
    const username = req.body.username;
    const email = req.body.email.toLowerCase();

    // const password = await encryptPassword(req.body.password);
    const password = await jwtAuth.encryptPassword(req.body.password);
    const registeredVia = "website";
    const gambar = "";

    /**  check email is used before or not */
    const notAvail = await userService.findByEmail(email);

    if (notAvail) {
      res.status(400).send({
        message: "Alamat Email sudah digunakan",
      });
      return;
    }

    /** add email if not exists */
    userService
      .create({ username, email, password, registeredVia, gambar })
      .then(async ({ id, username, email }) => {
        const User = await users.findOne({
          where: { email },
        });
        res.status(201).json({
          data: { id, username, email, registeredVia },
        });
      })
      .catch((err) => {
        res.status(422).json({
          message: err.message,
        });
      });
  }

  static async login(req, res) {
    try {
      const email = req.body.email.toLowerCase()
      const password = req.body.password

      /**  check email if user existed */
      const User = await userService.findByEmail(email)
      if (!User) {
        res.status(404).json({ status: "FAILED", message: "Email not found" });
        return
      }

      /**  password checking */
      const isPasswordCorrect = await jwtAuth.checkPassword(User.password, password)

      if (!isPasswordCorrect) {
        res.status(401).json({ status: "FAILED", message: "Password incorrect" });
        return
      }

      /** Creating toke  */
      const token = await jwtAuth.createToken({
        id: User.id,
        email: User.email,
        createdAt: User.createdAt,
        updatedAt: User.updatedAt,
      })

      res.status(201).json({
        id: User.id,
        email: User.email,
        token,
        createdAt: User.createdAt,
        updatedAt: User.updatedAt,
      })
    } catch (error) {
      res.status(400).json({
        status: "FAILED",
        message: error.message,
      });
    }
  }

  static async authorize(req, res, next) {
    try {
      console.log("\nAuthorization\n")
      const bearerToken = req.headers.authorization
      // console.log(bearerToken)
      const token = bearerToken.split('Bearer ')[1]

      const tokenPayLoad = jwt.verify(token, process.env.JWT_SECRET)

      console.log(tokenPayLoad)

      console.log("\n"+tokenPayLoad.id)

      req.Users = JSON.parse(
        JSON.stringify(await userService.findByEmail(tokenPayLoad.email))
      );

      /** delete encrypted password */
      delete req.Users.password
      next()

    } catch (error) {
      if (error.message.includes('jwt expired')) {
        res.status(401).json({ status: "FAILED", message: "Token Expired" });
        return
      }

      res.status(401).json({
        status: "FAILED",
        message: 'Login terlebih dahulu',
      })
    }
  }

  static async whoAmI(req, res) {
    try {
      res.status(200).json({
        status: 'OK',
        data: req.Users,
      })
    } catch (err) {
      res.status(404).json({
        status: "FAILED",
        message: err.message,
      });
    }
  }

  static async handleRoot(req, res) {
    res.status(200).json({ message: "goto /api/v1/docs to read full documentation" });
  }
}

module.exports = userController;
