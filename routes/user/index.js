const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require("passport");

// "/user/x routes
router.route("/oauth/facebook")
    .post(passport.authenticate("facebookToken", {session: false}), userController.facebookOauth);

module.exports = router;