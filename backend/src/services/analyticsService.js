const Review = require('../models/Review');

exports.calculateAnalytics = async () => {
    const total = await Review.countDocuments();
    const positive = await Review.countDocuments({ sentiment: 'positive' });
    const negative = await Review.countDocuments({ sentiment: 'negative' });
    const neutral = await Review.countDocuments({ sentiment: 'neutral' });

    return { total, positive, negative, neutral };
};
