const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
    res.send("User registered");
};

exports.login = async (req, res) => {
    res.send("User logged in");
};

exports.getUserProfile = async (req, res) => {
    res.json(req.user);
};

