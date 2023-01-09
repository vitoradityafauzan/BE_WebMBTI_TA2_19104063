const { use } = require("../../../../config/routes");
const { listUni } = require("../../../services/mbtiTestService");
const mbtiTestService = require("../../../services/mbtiTestService");

class mbtiTestController {
  static async addQuestion(req, res) {
    /* try {
        console.log("||  Add New Question - MBTI ||");
        const question = req.body.question;


    } catch (error) {
        res.status(400).json({
          status: "FAILED",
          message: error.message,
        });
      } */

    /** catching request data */
    const question = req.body.question;

    /** checking if question already existed */
    const check = await mbtiTestService.findQ(question);
    // console.log("CHECK ADD QUESTIOn, ", check);

    if (check) {
      res.status(422).json({
        status: "FAILED",
        message: "Question Already Added",
      });
      return;
    }

    /** send data to model */
    mbtiTestService
      .createQ({ question })
      .then(async ({ question }) => {
        res.status(201).json({
          status: "OK",
          message: "Question Added",
          question: { question },
        });
      })
      .catch((err) => {
        res.status(400).json({
          status: "FAILED",
          message: err.message,
        });
      });
  }

  static async getAllQuestions(req, res) {
    try {
      // console.log("||  Get All Questions ||");

      /** fetch data from model */
      const allQuestions = await mbtiTestService.listsQ();
      // console.log("CHECK LIST QUESTIONS, ", allQuestions);

      if (allQuestions == null || allQuestions == undefined) {
        // console.log("runs, ", typeof allQuestions);
        res.status(422).json({
          status: "FAILED",
          message: "Data Empty / Corrupted !",
        });
        return;
      }

      // console.log(allQuestions)

      /** send data to respond */
      res.status(201).json({
        status: "OK",
        data: allQuestions,
      });
    } catch (err) {
      res.status(422).json({
        status: "FAILED",
        message: err.message,
      });
    }
  }

  static async deleteQuestion(req, res) {
    /* try {
            console.log("||  Add New Question - MBTI ||");
            const question = req.body.question;
    
    
        } catch (error) {
            res.status(400).json({
              status: "FAILED",
              message: error.message,
            });
          } */
    // console.log("|| DELETE QUESTION || \n");

    /** catching request data */
    const id = req.params.code/1;
    // console.log(`delete id .${id}.\n`);

    if (id == null || id == undefined) {
      res.status(422).json({
        status: "FAILED",
        message: "Id Null",
      });
    }

    /** set data to be deleted from model */
    mbtiTestService
      .deleteQ(id)
      .then(async () => {
        res.status(201).json({
          status: "OK",
          message: "Question Deleted Successfully",
        });
      })
      .catch((err) => {
        res.status(400).json({
          status: "FAILED",
          message: err.message,
        });
      });
  }

  static async getAllAnswers(req, res) {
    try {
      // console.log("||  Get All Answers ||");

      /** fetch data from model */
      const allAnswers = await mbtiTestService.listsA();
      // console.log("CHECK LIST QUESTIONS, ", allQuestions);

      if (allAnswers == null || allAnswers == undefined) {
        // console.log("runs, ", typeof allQuestions);
        res.status(422).json({
          status: "FAILED",
          message: "Data Empty / Corrupted !",
        });
        return;
      }

      // console.log(allQuestions)

      /** send data to respond */
      res.status(201).json({
        status: "OK",
        data: allAnswers,
      });
    } catch (err) {
      res.status(422).json({
        status: "FAILED",
        message: err.message,
      });
    }
  }

  static async getAllTests(req, res) {
    try {
      // console.log("||  Get All Answers ||");

      /** fetch data from model */
      const allAnswers = await mbtiTestService.listsA();

      const allQuestions = await mbtiTestService.listsQ();
      
      if (allQuestions == null || allQuestions == undefined || allAnswers == null || allAnswers == undefined) {
        // console.log("runs, ", typeof allQuestions);
        res.status(422).json({
          status: "FAILED",
          message: "Data Empty / Corrupted !",
        });
        return;
      }

      let j = 1;
      let listTests = [];
      for (let i = 1; i <= 70; i++) {
        listTests.push({
          idQuestion: allQuestions[i-1].code_q,
          questions: allQuestions[i-1].question,
          answer: [
            {
              id: allAnswers[j-1].code_a,
              answer: allAnswers[j-1].answer,
              point: allAnswers[j-1].points,
              checked: false
            },
            {
              id: allAnswers[j].code_a,
              answer: allAnswers[j].answer,
              point: allAnswers[j].points,
              checked: false
            }
          ]
        })

        j += 2;
      }

      // console.log(allQuestions)

      /** send data to respond */
      res.status(201).json({
        status: "OK",
        data: listTests,
      });
    } catch (err) {
      res.status(422).json({
        status: "FAILED",
        message: err.message,
      });
    }
  }

  static async setUserCharacteristic(req, res) {
      console.log("||  SET USER's Char ||, ", req.body.userId);
      
      /** checking request data */
      if (req.body.userId === null || req.body.userId === undefined || req.body.charac === null || req.body.charac === undefined) {
        res.status(422).json({
          status: "FAILED",
          message: 'Request Data Not Found / Corrupted!',
        });
        return;
      }

      /** catching request data */
      const userId = req.body.userId;
      const charType = req.body.charac;

      console.log(`mbti controller, after got req data, ${typeof userId}`)

    /** send data to model */
    mbtiTestService
      .submitAnswer( userId, charType )
      .then(async () => {
        res.status(201).json({
          status: "OK",
          message: "Result Submitted Successfully",
        });
      })
      .catch((err) => {
        res.status(400).json({
          status: "FAILED",
          message: err.message,
        });
      });
  }

  static async getAllUni(req, res) {
    try {
      // console.log("||  Get All Answers ||");

      /** fetch data from model */
      const uniList = await mbtiTestService.listUni();
      
      const prodiList = await mbtiTestService.listProdi();
      
      if (uniList == null || uniList == undefined || prodiList == null || prodiList == undefined ) {
        // console.log("runs, ", typeof uniList);
        res.status(422).json({
          status: "FAILED",
          message: "Data Empty / Corrupted !",
        });
        return;
      }

      console.log(uniList)

      /** send data to respond */
      res.status(201).json({
        status: "OK",
        data: {university: uniList, prodi: prodiList},
      });
    } catch (err) {
      res.status(422).json({
        status: "FAILED",
        message: err.message,
      });
    }
  }
}

module.exports = mbtiTestController;
