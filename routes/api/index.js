const router = require("express").Router();
const quizController = require("../../controllers/quizController");

// "/api/x routes
router.route("/user")
    .post(quizController.createCat)
    .get(quizController.fetchCategory)

router.route("/scores")
    .post(quizController.createCat)
    .get(quizController.fetchCategory)

router.route("/category")
    .post(quizController.createCat)
    .get(quizController.fetchCategory)

module.exports = router;