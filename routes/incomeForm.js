const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const { generateIncomeForms } = require("../controllers/incomeForms");

// @desc    Generate all forms for a specific user
// @route   POST /api/income-forms/generate:id
// @access  private
router.post("/generate", auth, generateIncomeForms);

module.exports = router;
