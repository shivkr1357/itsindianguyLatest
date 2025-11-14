import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Machine Learning Basics Tutorial - Complete Guide | ItsIndianGuy",
  description: "Begin your ML journey with Python, scikit-learn and TensorFlow. Complete tutorial by ItsIndianGuy.",
};

export default function MLBasicsContentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link
          href="/tutorials/ml-basics"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Tutorial Overview
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            Machine Learning Basics - Complete Guide
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            Build your first ML models with Python, scikit-learn, and TensorFlow
          </p>
        </header>

        {/* Section 1: Setup */}
        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 1: Environment Setup
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Install Required Libraries
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <pre className="text-green-400 font-mono text-sm">
                  <code>{`# Create virtual environment
python -m venv ml-env
source ml-env/bin/activate  # On Windows: ml-env\\Scripts\\activate

# Install libraries
pip install numpy pandas matplotlib seaborn
pip install scikit-learn tensorflow keras
pip install jupyter notebook

# Verify installation
python -c "import sklearn, tensorflow; print('All set!')"

# Start Jupyter Notebook
jupyter notebook`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Data Preparation */}
        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 2: Data Preparation & Exploration
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Loading and Exploring Data
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <pre className="text-green-400 font-mono text-sm">
                  <code>{`import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Load dataset
from sklearn.datasets import load_iris
iris = load_iris()

# Create DataFrame
df = pd.DataFrame(
    data=iris.data,
    columns=iris.feature_names
)
df['target'] = iris.target
df['species'] = df['target'].map({
    0: 'setosa', 1: 'versicolor', 2: 'virginica'
})

# Explore data
print(df.head())
print(df.info())
print(df.describe())

# Check for missing values
print(df.isnull().sum())

# Visualize data distribution
plt.figure(figsize=(12, 4))
plt.subplot(131)
sns.histplot(data=df, x='sepal length (cm)', hue='species')
plt.subplot(132)
sns.histplot(data=df, x='sepal width (cm)', hue='species')
plt.subplot(133)
sns.histplot(data=df, x='petal length (cm)', hue='species')
plt.tight_layout()
plt.show()`}</code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Data Preprocessing
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <pre className="text-green-400 font-mono text-sm">
                  <code>{`from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

# Prepare features and target
X = df.drop(['target', 'species'], axis=1)
y = df['target']

# Split data: 80% training, 20% testing
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

# Feature scaling (standardization)
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

print(f"Training set size: {X_train.shape}")
print(f"Test set size: {X_test.shape}")`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Classification Model */}
        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 3: Classification - Logistic Regression
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Train Classification Model
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <pre className="text-green-400 font-mono text-sm">
                  <code>{`from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report
from sklearn.metrics import confusion_matrix

# Create and train model
model = LogisticRegression(max_iter=200, random_state=42)
model.fit(X_train_scaled, y_train)

# Make predictions
y_pred = model.predict(X_test_scaled)

# Evaluate model
accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy: {accuracy:.2%}")

# Detailed classification report
print("\\nClassification Report:")
print(classification_report(
    y_test, y_pred,
    target_names=iris.target_names
))

# Confusion Matrix
cm = confusion_matrix(y_test, y_pred)
plt.figure(figsize=(8, 6))
sns.heatmap(cm, annot=True, fmt='d', cmap='Blues',
            xticklabels=iris.target_names,
            yticklabels=iris.target_names)
plt.xlabel('Predicted')
plt.ylabel('Actual')
plt.title('Confusion Matrix')
plt.show()`}</code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Try Different Algorithms
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <pre className="text-green-400 font-mono text-sm">
                  <code>{`from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.svm import SVC
from sklearn.neighbors import KNeighborsClassifier

# Compare multiple models
models = {
    'Logistic Regression': LogisticRegression(max_iter=200),
    'Decision Tree': DecisionTreeClassifier(random_state=42),
    'Random Forest': RandomForestClassifier(n_estimators=100, random_state=42),
    'SVM': SVC(kernel='rbf', random_state=42),
    'K-Nearest Neighbors': KNeighborsClassifier(n_neighbors=5)
}

results = {}
for name, model in models.items():
    model.fit(X_train_scaled, y_train)
    y_pred = model.predict(X_test_scaled)
    accuracy = accuracy_score(y_test, y_pred)
    results[name] = accuracy
    print(f"{name}: {accuracy:.2%}")

# Visualize results
plt.figure(figsize=(10, 6))
plt.bar(results.keys(), results.values())
plt.ylim(0.8, 1.0)
plt.ylabel('Accuracy')
plt.title('Model Comparison')
plt.xticks(rotation=45, ha='right')
plt.tight_layout()
plt.show()`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Regression */}
        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 4: Regression - Predicting Continuous Values
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Linear Regression Example
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <pre className="text-green-400 font-mono text-sm">
                  <code>{`from sklearn.datasets import fetch_california_housing
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score

# Load housing dataset
housing = fetch_california_housing()
X = pd.DataFrame(housing.data, columns=housing.feature_names)
y = housing.target  # Median house value

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Scale features
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Train model
model = LinearRegression()
model.fit(X_train_scaled, y_train)

# Predictions
y_pred = model.predict(X_test_scaled)

# Evaluate
mse = mean_squared_error(y_test, y_pred)
rmse = np.sqrt(mse)
r2 = r2_score(y_test, y_pred)

print(f"Root Mean Squared Error: {rmse:.2f}")
print(f"R² Score: {r2:.2f}")

# Plot predictions vs actual
plt.figure(figsize=(10, 6))
plt.scatter(y_test, y_pred, alpha=0.5)
plt.plot([y_test.min(), y_test.max()],
         [y_test.min(), y_test.max()],
         'r--', lw=2)
plt.xlabel('Actual Values')
plt.ylabel('Predicted Values')
plt.title('Predictions vs Actual Values')
plt.show()`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Neural Networks */}
        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 5: Introduction to Neural Networks
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Build Your First Neural Network with TensorFlow
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <pre className="text-green-400 font-mono text-sm">
                  <code>{`import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers

# Prepare data (using Iris dataset)
X = iris.data
y = iris.target

# One-hot encode target
y_encoded = keras.utils.to_categorical(y, num_classes=3)

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y_encoded, test_size=0.2, random_state=42
)

# Build neural network
model = keras.Sequential([
    layers.Dense(16, activation='relu', input_shape=(4,)),
    layers.Dropout(0.2),
    layers.Dense(8, activation='relu'),
    layers.Dense(3, activation='softmax')
])

# Compile model
model.compile(
    optimizer='adam',
    loss='categorical_crossentropy',
    metrics=['accuracy']
)

# Display model architecture
model.summary()

# Train model
history = model.fit(
    X_train, y_train,
    epochs=50,
    batch_size=8,
    validation_split=0.2,
    verbose=0
)

# Evaluate on test set
test_loss, test_acc = model.evaluate(X_test, y_test)
print(f"\\nTest Accuracy: {test_acc:.2%}")

# Plot training history
plt.figure(figsize=(12, 4))
plt.subplot(121)
plt.plot(history.history['accuracy'], label='Training')
plt.plot(history.history['val_accuracy'], label='Validation')
plt.xlabel('Epoch')
plt.ylabel('Accuracy')
plt.legend()
plt.title('Model Accuracy')

plt.subplot(122)
plt.plot(history.history['loss'], label='Training')
plt.plot(history.history['val_loss'], label='Validation')
plt.xlabel('Epoch')
plt.ylabel('Loss')
plt.legend()
plt.title('Model Loss')
plt.tight_layout()
plt.show()`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Model Saving & Deployment */}
        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 6: Saving & Loading Models
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Save and Load Models
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <pre className="text-green-400 font-mono text-sm">
                  <code>{`import joblib

# Save scikit-learn model
joblib.dump(model, 'iris_model.pkl')
joblib.dump(scaler, 'scaler.pkl')

# Load model
loaded_model = joblib.load('iris_model.pkl')
loaded_scaler = joblib.load('scaler.pkl')

# Make predictions with loaded model
new_data = [[5.1, 3.5, 1.4, 0.2]]
new_data_scaled = loaded_scaler.transform(new_data)
prediction = loaded_model.predict(new_data_scaled)
print(f"Predicted class: {iris.target_names[prediction[0]]}")

# Save TensorFlow model
model.save('iris_nn_model.h5')

# Load TensorFlow model
loaded_nn_model = keras.models.load_model('iris_nn_model.h5')

# Make predictions
new_prediction = loaded_nn_model.predict(new_data)
predicted_class = np.argmax(new_prediction)
print(f"Predicted class: {iris.target_names[predicted_class]}")`}</code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Create Simple API for Model
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <pre className="text-green-400 font-mono text-sm">
                  <code>{`# app.py - Flask API for ML model
from flask import Flask, request, jsonify
import joblib
import numpy as np

app = Flask(__name__)

# Load model and scaler
model = joblib.load('iris_model.pkl')
scaler = joblib.load('scaler.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        features = np.array([[
            data['sepal_length'],
            data['sepal_width'],
            data['petal_length'],
            data['petal_width']
        ]])
        
        # Scale and predict
        features_scaled = scaler.transform(features)
        prediction = model.predict(features_scaled)
        probability = model.predict_proba(features_scaled)
        
        return jsonify({
            'prediction': int(prediction[0]),
            'species': iris.target_names[prediction[0]],
            'confidence': float(probability[0][prediction[0]])
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">You&apos;re Now an ML Practitioner! 🤖</h3>
          <p className="mb-6">
            You&apos;ve learned data preparation, classification, regression, neural networks, and model deployment!
          </p>
          <Link
            href="/tutorials/ml-basics"
            className="inline-block px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-neutral-100 transition"
          >
            Back to Tutorial Overview
          </Link>
        </div>
      </div>
    </div>
  );
}

