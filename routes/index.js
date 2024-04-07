// Inisialiasi Library
const express = require("express");
const router = express.Router();

// Routes
router.use("/crud_mahasiswa", require("./crud_mahasiswa"));
router.use("/docs", require("./docs"));

// Export Module
module.exports = router;