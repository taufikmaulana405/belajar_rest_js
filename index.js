require("dotenv").config();

// Inisialasi Envirovment
process.env.NODE_ENV = process.env.NODE_ENV || "development";
process.env.NODE_PATH = __dirname;

// Inisialasi Konfigurasi Server
const ip_bind = process.env.IP_BIND || "0.0.0.0";
const port = process.env.PORT || 3005;

// Inisialasi Library
const express = require("express");
const app = express();
const responseTimeHeader = require("response-time");
const errorhandler = require("errorhandler");
const compression = require("compression");
const morgan = require("morgan");
const { ValidationError } = require("express-json-validator-middleware");

// Middleware
app.use(express.json());
app.use(responseTimeHeader());
app.use(compression());
app.use(morgan("dev"));
app.use(errorhandler());

// Routes
app.use("/", require("./routes"));

// Validation Error handler
app.use((err, req, res, next) => {
    if (err instanceof ValidationError) {
        res.status(400).json({
            errors: [
                err.validationErrors
            ],
            status: "error",
            message: err.message,
            results: []
        });
        return;
    }
    next(err);
});

// Menghidupkan Server
app.listen(port, ip_bind, () => {
    console.log(`Server berjalan di http://${ip_bind}:${port}`);
});