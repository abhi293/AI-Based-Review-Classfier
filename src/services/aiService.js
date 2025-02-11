exports.analyzeSentiment = async (text) => {
    // Mocked AI sentiment analysis
    if (text.includes('good')) return 'positive';
    if (text.includes('bad')) return 'negative';
    return 'neutral';
};
