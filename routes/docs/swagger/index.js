// Inisialiasi Library
const express = require("express");
const router = express.Router();
const swagger = require("swagger-ui-express");
const fs = require("fs");

// Inisialiasi Validator JSON Schema
const swagger_config = JSON.parse(fs.readFileSync(`${__dirname}/openapi.json`, "utf8"));
const schema = JSON.parse(fs.readFileSync(`${process.env.NODE_PATH}/routes/crud_mahasiswa/v1/biodata/schema.json`, "utf8"));
swagger_config.components.schemas.biodata_data = schema;

router.get("/swagger.json", (req, res) => {
    res.json(swagger_config);
});

// Routes Swagger
router.use("/", swagger.serve, swagger.setup(swagger_config));

// Export Module
module.exports = router;