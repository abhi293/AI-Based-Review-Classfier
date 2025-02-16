const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Dummy database for reviews (Replace this with your database logic)
let reviews = [];

// Create a new review
exports.createReview = async (req, res) => {
  const { text, rating } = req.body;

  if (!text || !rating) {
    return res.status(400).json({ message: "Text and rating are required." });
  }

  const newReview = {
    id: reviews.length + 1,
    text,
    rating,
    user: req.user ? req.user.id : null, // Assuming auth middleware attaches user
  };

  reviews.push(newReview);
  res.status(201).json(newReview);
};

// Get all reviews
exports.getReviews = async (req, res) => {
  res.json(reviews);
};

// Get a review by ID
exports.getReviewById = async (req, res) => {
  const review = reviews.find((r) => r.id === parseInt(req.params.id));

  if (!review) {
    return res.status(404).json({ message: "Review not found" });
  }

  res.json(review);
};

// Delete a review
exports.deleteReview = async (req, res) => {
  const reviewIndex = reviews.findIndex((r) => r.id === parseInt(req.params.id));

  if (reviewIndex === -1) {
    return res.status(404).json({ message: "Review not found" });
  }

  reviews.splice(reviewIndex, 1);
  res.json({ message: "Review deleted successfully" });
};
