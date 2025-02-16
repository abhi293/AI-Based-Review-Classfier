const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const axios = require("axios");
const connectDB = require("./src/config/db");

// Import Routes
const authRoutes = require("./src/routes/authRoutes");
const reviewRoutes = require("./src/routes/reviewRoutes");
const analyticsRoutes = require("./src/routes/analyticsRoutes");
const userRoutes = require("./src/routes/userRoutes");
const notificationRoutes = require("./src/routes/notificationRoutes");
const adminRoutes = require("./src/routes/adminRoutes");
const aiRoutes = require("./src/routes/aiRoutes");


dotenv.config();

// Initialize Express App
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Connect to Database
connectDB();

// AI Model URL from Docker Environment
const AI_MODEL_URL = process.env.AI_MODEL_URL || "http://localhost:8001"; 

// Route to Interact with AI Model
app.post("/api/predict", async (req, res) => {
  try {
    const { reviewText } = req.body; // Get review text from request
    if (!reviewText) return res.status(400).json({ error: "Review text is required" });

    // Send request to AI Model
    const response = await axios.post(`${AI_MODEL_URL}/predict`, { text: reviewText });

    // Return AI Model's response
    res.json(response.data);
  } catch (error) {
    console.error("Error connecting to AI model:", error.message);
    res.status(500).json({ error: "Failed to get response from AI model" });
  }
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/users", userRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/ai", aiRoutes);

// Default Route
app.get("/", (req, res) => {
  res.send("🚀 AI Review Classifier API is Running!");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
