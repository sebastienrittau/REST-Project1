const express = require('express');
const router = express.Router();
const countries = require("../controllers/country.controller");

// Get all countries
router.get('/', countries.findAll);

// Find country by id
router.get("/:id", countries.findById);

module.exports = router;