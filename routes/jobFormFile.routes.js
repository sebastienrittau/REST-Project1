const express = require('express');
const router = express.Router();
const jobFormFiles = require("../controllers/jobFormFile.controller");

// Create a jobFormFile
router.post('/', jobFormFiles.create);

module.exports = router;
