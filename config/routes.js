const express = require("express");
const controllers = require("../app/controllers");
const apiRouter = express.Router();

/**
 * TODO: Implement your own API
 *       implementations
 */

/** ========================  ROOT ENDPOINT  ================================= */
apiRouter.get('/', controllers.api.v1.userController.handleRoot)


/** =====  Authentication Process  ===== */
/** -------- Regular */
apiRouter.post(
  '/api/v1/auth/register',
  controllers.api.v1.userController.register,
)

apiRouter.post(
  '/api/v1/auth/login',
  controllers.api.v1.userController.login,
)

apiRouter.get(
  '/api/v1/user/whoami',
  controllers.api.v1.userController.authorize,
  controllers.api.v1.userController.whoAmI,
)

/** -------- Admins */
apiRouter.post(
  '/add3v/v1/register',
  controllers.api.v1.addevController.register,
)

/* apiRouter.post(
  '/add3v/s/e/c/r/e/t/regis',
  controllers.api.v1.addevController.register,
) */

apiRouter.post(
  '/add3v/v1/login',
  controllers.api.v1.addevController.login,
)

apiRouter.get(
  '/add3v/v1/whoami',
  controllers.api.v1.addevController.authorize,
  controllers.api.v1.addevController.whoAmI,
)

apiRouter.get(
  '/add3v/v1/alluser',
  controllers.api.v1.addevController.authorize,
  controllers.api.v1.addevController.getAllUser,
)


/** =====  MBTI Questions Process  ===== */
/** ------ User */
apiRouter.get(
  '/api/v1/mbti-questions',
  controllers.api.v1.userController.authorize,
  controllers.api.v1.mbtiTestController.getAllQuestions,
)


/** ----- Admin */
apiRouter.get(
  '/add3v/v1/all-mbti-questions',/* 
  controllers.api.v1.addevController.authorize, */
  controllers.api.v1.mbtiTestController.getAllQuestions,
)

apiRouter.post(
  '/add3v/v1/add-mbti-question',
  controllers.api.v1.addevController.authorize,
  controllers.api.v1.mbtiTestController.addQuestion,
)

apiRouter.delete(
  '/add3v/v1/delete-mbti-question/:code',
  controllers.api.v1.addevController.authorize,
  controllers.api.v1.mbtiTestController.deleteQuestion,
)

/** =====  MBTI Answers Process  ===== */
/** ------ User */
apiRouter.get(
  '/api/v1/mbti-answers',
  controllers.api.v1.userController.authorize,
  controllers.api.v1.mbtiTestController.getAllAnswers,
)

apiRouter.get(
  '/api/v1/list-tests',
  controllers.api.v1.mbtiTestController.getAllTests,
)


/** ----- Admin */
apiRouter.get(
  '/add3v/v1/all-mbti-answers',/* 
  controllers.api.v1.addevController.authorize, */
  controllers.api.v1.mbtiTestController.getAllAnswers,
)

/* apiRouter.post(
  '/add3v/v1/add-mbti-answer',
  controllers.api.v1.addevController.authorize,
  controllers.api.v1.mbtiTestController.addAnswer,
)

apiRouter.delete(
  '/add3v/v1/delete-mbti-answer/:code',
  controllers.api.v1.addevController.authorize,
  controllers.api.v1.mbtiTestController.deleteAnswer,
) */
 
/**
 * TODO: Delete this, this is just a demonstration of
 *       error handler
 */
 apiRouter.get("/api/v1/errors", () => {
  throw new Error(
    "The Industrial Revolution and its consequences have been a disaster for the human race."
  );
});

apiRouter.use(controllers.api.main.onLost);
apiRouter.use(controllers.api.main.onError);

module.exports = apiRouter;



// 

/* apiRouter.get("/api/v1/posts", controllers.api.v1.postController.list);
apiRouter.post("/api/v1/posts", controllers.api.v1.postController.create);
apiRouter.put("/api/v1/posts/:id", controllers.api.v1.postController.update);
apiRouter.get("/api/v1/posts/:id", controllers.api.v1.postController.show);
apiRouter.delete(
  "/api/v1/posts/:id",
  controllers.api.v1.postController.destroy
); */
 

