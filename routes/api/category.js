const router = require("express").Router();
const quizController = require("../../controllers/quizController");

// Matches with "/api/category"
router.route("/category")
  .post(quizController.createCat)
  .put(quizController.updateCat)

module.exports = router;