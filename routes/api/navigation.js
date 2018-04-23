const router = require("express").Router();
const quizController = require("../../controllers/quizController");

// Matches with "/api/navigation"
router.route("/")
  // .get(quizController.findAll)
  // .post(quizController.create)

router.route("/:id")
  // .delete(quizController.remove)

module.exports = router;