// import { request } from "https";
const https = require("https");
const router = require("express").Router();
const quizController = require("../../controllers/quizController");

// "/api/x routes
router.route("/user")
    .get((req, res) => {
        // let split = req.headers.authorization.split(" ");
        // let token = split[1];
        // console.log("https://graph.facebook.com/me?access_token="+token)
        // https.get("https://graph.facebook.com/me?access_token="+token, res => {
        //     console.log(res.data);
        // })
    res.status(200).json({
      message: "You're authorized to see this secret message.",
      // user values passed through from auth middleware
      user: req.user
    });
  });

router.route("/scores")
    .post(quizController.createCat)
    .get(quizController.fetchCategory)

router.route("/category")
    .post(quizController.createCat)
    .get(quizController.fetchCategory)
    .put(quizController.updateCategory)

module.exports = router;