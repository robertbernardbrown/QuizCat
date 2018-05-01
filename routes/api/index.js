const router = require("express").Router();
const userRoutes = require("./user");
const scoresRoutes = require("./scores");
const categoryRoutes = require("./category");

// "api/" routes
router.use("/user", userRoutes);
router.use("/scores", scoresRoutes);
router.use("/category", categoryRoutes);

module.exports = router;