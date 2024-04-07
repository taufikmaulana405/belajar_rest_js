// Inisaliasi Library
const express = require("express");
const router = express.Router();

// Routes
router.use("/v1", require("./v1"));

// Export Module
module.exports = router;