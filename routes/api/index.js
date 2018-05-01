const router = require("express").Router();
const dataRoutes = require("./articles");

// Article routes
router.use("/data", dataRoutes);

module.exports = router;