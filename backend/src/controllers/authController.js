const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


exports.register = async (req, res) => {
  const { name, email, password } = req.body; // 🔹 Ensure `name` is received

  try {
      console.log("🔹 Received registration request:", name, email);

      let user = await User.findOne({ email });

      if (user) {
          console.log("❌ User already exists");
          return res.status(400).json({ error: "User already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      console.log("✅ Password hashed successfully");

      user = new User({ name, email, password: hashedPassword }); // 🔹 Include `name`

      await user.save();
      console.log("✅ User saved to database");

      res.status(201).json({ message: "User registered successfully" });

  } catch (error) {
      console.error("❌ Registration Error:", error.message);
      res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
      console.log("🔹 Login attempt:", email);

      const user = await User.findOne({ email });

      if (!user) {
          console.log("❌ User not found:", email);
          return res.status(401).json({ error: "User not found. Please register first." });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
          console.log("❌ Invalid password for:", email);
          return res.status(401).json({ error: "Invalid credentials" });
      }

      const token = jwt.sign(
          { id: user._id, email: user.email }, 
          process.env.JWT_SECRET, 
          { expiresIn: "1h" }
      );

      console.log("✅ Login successful:", email);

      res.status(200).json({ token });

  } catch (error) {
      console.error("❌ Login Error:", error.message);
      res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
};

exports.getUserProfile = async (req, res) => {
  try {
      console.log("🔹 Fetching user profile for ID:", req.user.id);

      const user = await User.findById(req.user.id).select("-password");
      if (!user) {
          console.log("❌ User profile not found:", req.user.id);
          return res.status(404).json({ message: "User not found" });
      }

      console.log("✅ User profile fetched successfully");
      res.status(200).json(user);

  } catch (error) {
      console.error("❌ Profile Fetch Error:", error.message);
      res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
};
