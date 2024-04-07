// Inisialisasi Library
const express = require("express");
const router = express.Router();

// Routes
router.get("/", (req, res) => {
    res.redirect("/docs/swagger");
});

router.use("/swagger", require("./swagger"));

// Export Module
module.exports = router;