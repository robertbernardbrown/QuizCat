const router = require("express").Router();
const categoryController = require("../../controllers/categoryController");
const userController = require("../../controllers/userController");


// Matches with "/api/category"
router.route("/category")
  .get(categoryController.findAll)
  .post(categoryController.create)

// Matches with "/api/user"
router.route("/user")
  .delete(userController.remove)

module.exports = router;