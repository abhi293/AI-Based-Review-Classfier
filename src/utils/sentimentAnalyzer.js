const Sentiment = require('sentiment');

const sentiment = new Sentiment();

const analyzeSentiment = (text) => {
    const result = sentiment.analyze(text);
    return {
        score: result.score,  // Overall sentiment score (-ve, 0, +ve)
        comparative: result.comparative,  // Average sentiment per word
        tokens: result.tokens,  // Tokenized words
        words: result.words,  // Words contributing to score
        positive: result.positive,  // Positive words
        negative: result.negative   // Negative words
    };
};

module.exports = analyzeSentiment;
