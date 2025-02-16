module.exports = (req, res, next) => {
    if (!req.body.content) {
        return res.status(400).json({ message: "Content is required" });
    }
    next();
};
