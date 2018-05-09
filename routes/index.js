const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const userRoutes = require("./user");

// API Routes
router.use("/api", apiRoutes);

// user Routes
router.use("/user", userRoutes);

module.exports = router;