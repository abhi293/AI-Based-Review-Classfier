const express = require("express");
const axios = require("axios");

const router = express.Router();
const AI_MODEL_URL = process.env.AI_MODEL_URL || "http://localhost:8001";

// Route for AI Model Prediction
router.post("/review-analysis", async (req, res) => {
    try {
        const response = await axios.post(`${AI_MODEL_URL}/predict/`, req.body);
        res.json(response.data);
    } catch (error) {
        console.error("AI Model request failed:", error.message);
        res.status(500).json({ error: "AI Model request failed" });
    }
});

module.exports = router;
