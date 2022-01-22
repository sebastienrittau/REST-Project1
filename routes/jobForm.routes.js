const express = require('express');
const router = express.Router();
const jobForms = require("../controllers/jobForm.controller");

// Create a job form
router.post('/', jobForms.create);
// Trigger email

module.exports = router;
