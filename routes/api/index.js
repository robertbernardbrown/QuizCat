const router = require("express").Router();
const navRoutes = require("./articles");

// Article routes
router.use("/navigation", navRoutes);

module.exports = router;