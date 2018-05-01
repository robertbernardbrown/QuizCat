const router = require("express").Router();
const quizController = require("../../controllers/quizController");

// "/api/x routes
router.route("/user");
router.route("/scores");

router.route("/category")
    .post(quizController.createCat)
    .get(quizController.fetchCategory)

module.exports = router;