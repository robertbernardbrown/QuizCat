const router = require("express").Router();
<<<<<<< HEAD
const dataRoutes = require("./articles");

// Article routes
router.use("/data", dataRoutes);
=======
const navRoutes = require("./articles");

// Article routes
router.use("/navigation", navRoutes);
>>>>>>> master

module.exports = router;