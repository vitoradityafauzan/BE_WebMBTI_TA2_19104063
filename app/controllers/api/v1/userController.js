/* const bcrypt = require("bcryptjs");*/
const jwt = require("jsonwebtoken"); 
const { users } = require("../../../models");
const userService = require("../../../services/userService")
const jwtAuth = require("./authenticationController")
// const axios = require('axios')

class userController {
  static async register(req, res) {
    console.log('REGISTER runs')
    const username = req.body.username;
    const email = req.body.email.toLowerCase();

    // const password = await encryptPassword(req.body.password);

    if (req.body.password == undefined || req.body.password == null || req.body.password == "") {
      return res.status(422).json({
        status: "FAILED",
        message: "password is empty !",
      });
      
    }

    const password = await jwtAuth.encryptPassword(req.body.password);
    const registeredvia = "website";
    const gambar = "";

    // console.log('isi req body eiam, '+req.body.email.toLowerCase()+` , ${email}`);

    /**  check email is used before or not */
    /* const notAvail = await userService.findByEmail(req.body.email.toLowerCase()); */
    
    const notAvail = await users.findOne({
      where: { email },
    });

    // console.log(notAvail);

    if (notAvail == true || notAvail != null) {
      // console.log('REGISTER, user already exist')
      res.status(422).send({
        status: "FAILED",
        message: "Alamat Email sudah digunakan",
      });
      return; 
    }

    // console.log('REGISTER, user new')

    /** add email if not exists */
    userService
      .create({ username, email, password, registeredvia, gambar })
      .then(async ({ id, username, email, registeredVia }) => {
        const User = await users.findOne({
          where: { email },
        });
        res.status(201).json({
          status: "OK",
          data: { id, username, email, registeredVia },
        });
      })
      .catch((err) => {
        res.status(400).json({
          status: "FAILED",
          message: err.message,
        });
      });
  }

  static async login(req, res) {
    try {
      const email = req.body.email.toLowerCase()
      const password = req.body.password

      console.log('Login Starts')

      /**  check email if user existed */
      // const User = await userService.findByEmail(email);
      const User = await users.findOne({
        where: { email },
      });

      if (!User) {
        // console.log('LOGIN, email not found');
        res.status(422).json({ status: "FAILED", message: "Email Not Found" });
        return
      }

      // console.log('LOGIN, user found')
      // console.log('user data, '+User.password);

      /**  password checking */
      const isPasswordCorrect = await jwtAuth.checkPassword(User.password, password);

      if (!isPasswordCorrect) {
        console.log('LOGIN, pass wrong');
        res.status(422).json({ status: "FAILED", message: "Password Incorrect" });
        return
      }

      // console.log('LOGIN, pass correct')

      /** Creating toke  */
      const token = await jwtAuth.createToken({
        id: User.id,
        email: User.email,
        regular: true,
        createdAt: User.createdAt,
        updatedAt: User.updatedAt,
      })

      res.status(201).json({
        /* id: User.id,
        email: User.email, */
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
      const token = bearerToken.split('Bearer ')[1];
      const tokenPayLoad = jwt.verify(token, process.env.JWT_SECRET);

      // console.log(tokenPayLoad)
      // console.log("\n"+tokenPayLoad.id)

      req.Users = JSON.parse(
        JSON.stringify(await userService.findByEmail(tokenPayLoad.email))
      );

      if (!req.Users) {
        res.status(401).json({
          status: "FAILED",
          error: 'Account Not Found'
        })
        return;
      }

      req.Users.regular = true;

      /** delete encrypted password */
      delete req.Users.password;
      next()

    } catch (error) {
      if (error.message.includes('jwt expired')) {
        res.status(401).json({ 
          status: "FAILED", 
          message: "Token Expired" 
        });
        return;
      }

      res.status(401).json({
        status: "FAILED",
        error: 'Login First',
        message: error.message
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
