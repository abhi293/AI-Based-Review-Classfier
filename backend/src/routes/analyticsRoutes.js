const express = require("express");
const { getSentimentSummary, getTopWords } = require("../controllers/analyticsController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/summary", protect, getSentimentSummary);
router.get("/top-words", protect, getTopWords);

module.exports = router;
