import joblib
from flask import Flask, request, jsonify

app = Flask(__name__)

# Load vectorizer and model
vectorizer = joblib.load("../vectorizer.pkl")
model = joblib.load("../model.pkl")  # Ensure you have trained and saved this model

# Define label mapping
LABEL_MAP = {0: "negative", 1: "positive"}

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        text = data.get("text", "")

        if not text:
            return jsonify({"error": "No text provided"}), 400

        # Vectorize input
        text_vectorized = vectorizer.transform([text])

        # Predict
        prediction = model.predict(text_vectorized)[0]

        return jsonify({'prediction': LABEL_MAP.get(int(prediction), "unknown")})  # Convert to label

    except Exception as e:
        return jsonify({"error": str(e)}), 500  # Debugging response

if __name__ == '__main__':
    app.run(debug=True)
