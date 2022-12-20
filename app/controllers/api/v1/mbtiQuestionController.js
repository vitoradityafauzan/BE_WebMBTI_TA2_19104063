const mbtiQuestionService = require("../../../services/mbtiQuestionService");

class mbtiQuestionController {
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
    const check = await mbtiQuestionService.find(question);
    console.log("CHECK ADD QUESTIOn, ", check);
    if (check) {
      res.status(422).json({
        status: "FAILED",
        message: "Question Already Added",
      });
      return;
    }

    /** send data to model */
    mbtiQuestionService
      .create({ question })
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
      console.log("||  Get All Questions ||");

      /** fetch data from model */
      const allQuestions = await mbtiQuestionService.lists();
      console.log("CHECK LIST QUESTIONS, ", allQuestions);

      if (allQuestions == null || allQuestions == undefined) {
        console.log("runs, ", typeof allQuestions);
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
    console.log("DELETE RUNS \n");

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
    mbtiQuestionService
      .delete(id)
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
}

module.exports = mbtiQuestionController;
