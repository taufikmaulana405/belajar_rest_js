// Inisialiasi Library
const express = require("express");
const router = express.Router();
const fs = require("fs");
const conn_mariadb = require("../../../../library/database/mariadb");

// Inisialiasi Validator JSON Schema
const lib_validate_json = require("express-json-validator-middleware").Validator;
const validate_json = new lib_validate_json({ allErrors: true }).validate;
const schema_body = JSON.parse(fs.readFileSync(`${__dirname}/schema.json`));
router.get("/schema", (req, res) => {
    res.send(schema_body);
});

// Set Header Cache-Control
router.use((req, res, next) => {
    res.setHeader("Cache-Control", "no-store");
    next();
});

router.get("/hello_word", (req, res) => {
    res.send({
        errors: [],
        message: "Welcome to API v1",
        success: true,
        results: []
    });
});

router.get("/", async (req, res) => {
    try {
        // Mendapatkan data dari database
        const rows = await conn_mariadb.query("SELECT * FROM biodata");
        // Mengirimkan data ke client
        res.send({
            errors: [],
            message: "Data Berhasil Diambil",
            success: true,
            results: rows
        });
    } catch (error) {
        // Menampilkan error di console
        console.error(error);
        // Mengirimkan respon error ke client
        res.status(500).send({
            errors: [
                {
                    message: error
                }
            ],
            message: "Internal Server Error",
            success: false,
            results: []
        });
    }
});

router.get("/:id", async (req, res) => {
    // Mendapatkan data dari Parameter
    const id = req.params.id;
    try {
        // Mendapatkan data dari database
        const rows = await conn_mariadb.query("SELECT * FROM biodata WHERE id = ?", [id]);
        if (rows.length === 0) {
            // Mengirimkan respon not found ke client
            res.status(404).send({
                errors: [],
                message: `Data ${id} tidak ditemukan`,
                success: false,
                results: []
            });
            return;
        }
        // Mengirimkan data ke client
        res.send({
            errors: [],
            message: `Data ${id} Berhasil Diambil`,
            success: true,
            results: rows
        });
    } catch (error) {
        // Menampilkan error di console
        console.error(error);
        // Mengirimkan respon error ke client
        res.status(500).send({
            errors: [
                {
                    message: error
                }
            ],
            message: "Internal Server Error",
            success: false,
            data: []
        });
    }
});

router.post("/", validate_json({ body: schema_body }), async (req, res) => {
    // Mendapatkan data dari body
    const { nama, nim, email, fakultas, prodi } = req.body;
    try {
        // Menyimpan data ke database
        await conn_mariadb.query("INSERT INTO biodata (nama, nim, email, fakultas, prodi) VALUES (?, ?, ?, ?, ?)", [nama, nim, email, fakultas, prodi]);
        // Mengirimkan respon berhasil ke client
        res.status(201).send({
            errors: [],
            message: "Data berhasil disimpan",
            success: true,
            data: req.body
        });
    } catch (error) {
        // Menampilkan error di console
        console.error(error);
        // Mengirimkan respon error ke client
        res.status(500).send({
            errors: [
                {
                    message: error
                }
            ],
            message: "Internal Server Error",
            success: false,
            data: []
        });
    }
});

router.put("/:id", validate_json({ body: schema_body }), async (req, res) => {
    // Mendapatkan data dari Parameter
    const id = req.params.id;
    // Mendapatkan data dari body
    const { nama, nim, email, fakultas, prodi } = req.body;
    try {
        // Update data ke database
        const rows = await conn_mariadb.query("UPDATE biodata SET nama = ?, nim = ?, email = ?, fakultas = ?, prodi = ? WHERE id = ?", [nama, nim, email, fakultas, prodi, id]);
        if (rows.affectedRows === 0) {
            // Mengirimkan respon not found ke client
            res.status(404).send({
                errors: [],
                message: `Data ${id} tidak ditemukan`,
                success: false,
                data: []
            });
            return;
        }
        // Mengirimkan respon berhasil ke client
        res.status(201).send({
            errors: [],
            message: "Data Berhasil diupdate",
            success: true,
            data: req.body
        });
    } catch (error) {
        // Menampilkan error di console
        console.error(error);
        // Mengirimkan respon error ke client
        res.send({
            errors: [
                {
                    message: error
                }
            ],
            message: "Internal Server Error",
            success: false,
            data: []
        });
    }
});

router.delete("/:id", async (req, res) => {
    // Mendapatkan data dari Parameter
    const id = req.params.id;
    try {
        // Delete data dari database
        const rows = await conn_mariadb.query("DELETE FROM biodata WHERE id = ?", [id]);
        if (rows.affectedRows === 0) {
            // Mengirimkan respon not found ke client
            res.status(404).send({
                errors: [],
                message: `Data ${id} tidak ditemukan`,
                success: false,
                data: []
            });
            return;
        }
        // Mengirimkan respon berhasil ke client
        res.status(204).send();
    } catch (error) {
        // Menampilkan error di console
        console.error(error);
        // Mengirimkan respon error ke client
        res.status(500).send({
            errors: [
                {
                    message: error
                }
            ],
            message: "Internal Server Error",
            success: false,
            data: []
        });
    }
});

// Export Module
module.exports = router;