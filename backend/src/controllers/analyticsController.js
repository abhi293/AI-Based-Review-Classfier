const analyticsService = require('../services/analyticsService');

exports.getSentimentSummary = async (req, res) => {
    try {
        const summary = await analyticsService.calculateSentimentSummary();
        res.status(200).json(summary);
    } catch (error) {
        res.status(500).json({ message: "Error fetching sentiment summary", error });
    }
};

exports.getTopWords = async (req, res) => {
    try {
        const topWords = await analyticsService.getTopWords();
        res.status(200).json(topWords);
    } catch (error) {
        res.status(500).json({ message: "Error fetching top words", error });
    }
};
