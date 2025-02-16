const express = require("express");
const router = express.Router();

// Dummy route for testing
router.get("/", (req, res) => {
    res.send("Notifications route working!");
});

module.exports = router;
