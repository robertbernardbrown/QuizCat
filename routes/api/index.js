const router = require("express").Router();
const quizController = require("../../controllers/quizController");
const passport = require("passport");

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
    .put(quizController.updateCategory)

router.route("/oauth/facebook")
.post(passport.authenticate("facebookToken", {session: false}), quizController.facebookOauth);

module.exports = router;