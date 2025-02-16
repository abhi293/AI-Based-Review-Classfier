const express = require("express");
const { createReview, getReviews, getReviewById, deleteReview } = require("../controllers/reviewController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", getReviews);
router.get("/:id", getReviewById);
router.post("/", protect, createReview);
router.delete("/:id", protect, deleteReview);

module.exports = router;
