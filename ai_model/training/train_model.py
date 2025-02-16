import pandas as pd
import joblib
from training.preprocess import preprocess_data
from sklearn.linear_model import LogisticRegression

# Load training data (Fix the file path)
import os
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
train_file = os.path.join(BASE_DIR, '../data/train.csv')

X, y = preprocess_data(train_file)

# Train model
def train_logistic_model(X, y):  # Renamed function
    model = LogisticRegression()
    model.fit(X, y)
    joblib.dump(model, os.path.join(BASE_DIR, '../model.pkl'))
    joblib.dump(vectorizer, "vectorizer.pkl")  # Save TF-IDF Vectorizer
    print("Model training complete. Saved as model.pkl and vectorizer.pkl")


# If running this script directly, train the model
if __name__ == "__main__":
    train_logistic_model(X, y)
