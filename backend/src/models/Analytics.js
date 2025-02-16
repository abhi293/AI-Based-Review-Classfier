const mongoose = require('mongoose');

const AnalyticsSchema = new mongoose.Schema({
    totalReviews: Number,
    positiveReviews: Number,
    negativeReviews: Number,
    neutralReviews: Number
},
{ timestamps: true }
);

module.exports = mongoose.model('Analytics', AnalyticsSchema);
