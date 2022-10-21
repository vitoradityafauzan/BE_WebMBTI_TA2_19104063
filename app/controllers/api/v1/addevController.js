const { addevs, users } = require("../../../models");
const addevService = require("../../../services/addevService");
const jwt = require("jsonwebtoken"); 
const jwtAuth = require("./authenticationController");

class addevController {
  static async register(req, res) {
    const username = req.body.username;
    const email = req.body.email.toLowerCase();
    const password = await jwtAuth.encryptPassword(req.body.password);
    const notSuper = false;

    /**  check email is used before or not */
    const notAvail = await addevService.findByEmail(email);

    if (notAvail) {
      res.status(400).send({
        message: "Alamat Email sudah digunakan",
      });
      return;
    }

    /** add email if not exists */
    addevService
      .create({ username, email, password,  notSuper })
      .then(async ({ id, username, email }) => {
        const User = await addevs.findOne({
          where: { email },
        });
        res.status(201).json({
          data: { id, username, email, registeredVia, is_super },
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
      const email = req.body.email.toLowerCase();
      const password = req.body.password;

      /**  check email if user existed */
      const User = await addevService.findByEmail(email);
      if (!User) {
        res.status(404).json({ status: "FAILED", message: "Email not found" });
        return;
      }

      /**  password checking */
      const isPasswordCorrect = await jwtAuth.checkPassword(User.password, password);

      if (!isPasswordCorrect) {
        res.status(401).json({ status: "FAILED", message: "Password incorrect" });
        return;
      }

      /** Creating toke  */
      const token = await jwtAuth.createToken({
        id: User.id,
        email: User.email,
        createdAt: User.createdAt,
        updatedAt: User.updatedAt,
      });

      res.status(201).json({
        id: User.id,
        email: User.email,
        token,
        createdAt: User.createdAt,
        updatedAt: User.updatedAt,
      });
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

      // console.log(tokenPayLoad)

      req.userss = JSON.parse(
        JSON.stringify(await addevService.findByEmail(tokenPayLoad.email))
      );

      /** delete encrypted password */
      delete req.userss.password
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
        data: req.userss,
      })
    } catch (err) {
      res.status(404).json({
        status: "FAILED",
        message: err.message,
      });
    }
  }

  static async getAllUser(req, res) {
    try{
      console.log("||  Get All User's Data ||");

      const chek = req.userss.is_super
      console.log(chek);

      if (chek == false || chek == "false") {
        res.status(401).json({
          status: "FAILED",
          message: "Unauthorized Access!",
        })
        return;
      }

      const allUser = addevService.listUsers();

      if (allUser == null || allUser == undefined) {
        res.status(401).json({
          status: "FAILED",
          message: "Data Empty / Corrupted !",
        })
        return;
      }

      // console.log(allUser)

      res.status(201).json({
        status: "OK",
        data: allUser,
      })

    }catch (err) {
      res.status(404).json({
        status: "FAILED",
        message: err.message,
      })
    }
  }
}

module.exports = addevController;
