const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  // Registration logic
};

exports.login = async (req, res) => {
  // Login logic
};

exports.getUserProfile = async (req, res) => {
  res.json(req.user);
};
