// import { request } from "https";
const https = require("https");
const router = require("express").Router();
const quizController = require("../../controllers/quizController");

// "/api/x routes
router.route("/scores")
    .post(quizController.saveScore)
    .get(quizController.fetchScore)

router.route("/category")
    .post(quizController.createCat)
    .get(quizController.fetchCategory)
    .put(quizController.updateCategory)

module.exports = router;