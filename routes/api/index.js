// import { request } from "https";
const https = require("https");
const router = require("express").Router();
const quizController = require("../../controllers/quizController");

// "/api/x routes
router.get("/user", (req, res) => {
    res.status(200).json({
        // user values passed through from auth middleware
        user: req.user.name,
        user_id: req.user._id
      });
})

router.route("/getQuiz/:category")
    .get(quizController.getQuiz)

router.route("/scores")
    .post(quizController.saveScore)

router.route("/getScores")
    .get(quizController.fetchScore)

router.route("/getScores/:category")
    .get(quizController.fetchScore)

router.route("/getUserScores/:userName")
    .get(quizController.fetchUserScore)

router.route("/category")
    .post(quizController.createCat)
    .get(quizController.fetchCategory)
    .put(quizController.updateCategory)

module.exports = router;