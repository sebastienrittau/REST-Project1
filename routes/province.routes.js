const express = require('express');
const router = express.Router();
const provinces = require("../controllers/province.controller");

// Get all provinces
router.get('/', provinces.findbyCountryId);

module.exports = router;