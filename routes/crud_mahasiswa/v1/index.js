// Inisialisasi Library
const express = require("express");
const router = express.Router();

// Routes
router.use("/biodata", require("./biodata"));

// Export Module
module.exports = router;