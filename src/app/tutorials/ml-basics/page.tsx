import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Machine Learning Basics - Start Your ML Journey | ItsIndianGuy",
  description: "Begin your machine learning journey with Python, scikit-learn, and TensorFlow. Build classification, regression, and clustering models with practical examples.",
  keywords: "machine learning tutorial, ML basics, Python ML, scikit-learn, TensorFlow, data science, AI tutorial",
};

export default function MLBasicsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        {/* Back Button */}
        <Link
          href="/tutorials"
          className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:underline mb-8"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Tutorials
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/2103/2103832.png"
              alt="Machine Learning"
              width={120}
              height={120}
              className="rounded-lg"
            />
          </div>
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-full text-sm font-medium">
              Beginner
            </span>
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-full text-sm font-medium">
              50 min
            </span>
            <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-100 rounded-full text-sm font-medium">
              AI/ML
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            Machine Learning Basics
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            Start your journey into AI and machine learning with practical Python examples
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            Introduction
          </h2>
          <div className="space-y-4 text-neutral-600 dark:text-neutral-300">
            <p>
              Machine Learning is transforming every industry, from healthcare to finance to entertainment. This beginner-friendly tutorial will introduce you to ML fundamentals without assuming any prior experience. You&apos;ll learn by doing, building real models that solve actual problems.
            </p>
            <p>
              We&apos;ll use Python and popular libraries like scikit-learn, NumPy, and Pandas to build classification, regression, and clustering models. By the end of this tutorial, you&apos;ll understand the ML workflow, know when to use different algorithms, and be ready to tackle more advanced topics.
            </p>
          </div>
        </div>

        {/* What You'll Learn */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
            What You&apos;ll Learn
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "What is Machine Learning and why it matters",
              "Setting up Python ML environment (Anaconda, Jupyter)",
              "NumPy and Pandas for data manipulation",
              "Data preprocessing and cleaning techniques",
              "Supervised vs Unsupervised learning",
              "Building your first classification model",
              "Linear and Logistic Regression",
              "Decision Trees and Random Forests",
              "K-Means Clustering algorithm",
              "Model evaluation metrics and validation",
              "Cross-validation and hyperparameter tuning",
              "Deploying ML models to production"
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-purple-600 dark:text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-neutral-700 dark:text-neutral-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Prerequisites */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            Prerequisites
          </h2>
          <ul className="space-y-2 text-neutral-600 dark:text-neutral-300">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Basic Python programming knowledge</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>High school level mathematics (algebra, statistics)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Python 3.8+ installed on your system</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Enthusiasm to learn! No ML experience needed</span>
            </li>
          </ul>
        </div>

        {/* Tutorial Outline */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
            Tutorial Outline
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "1. Introduction to Machine Learning",
                topics: ["What is ML and types of ML", "Real-world applications", "The ML workflow", "Setting up your environment"]
              },
              {
                title: "2. Python Libraries for ML",
                topics: ["NumPy for numerical computing", "Pandas for data manipulation", "Matplotlib and Seaborn for visualization", "scikit-learn ecosystem"]
              },
              {
                title: "3. Data Preprocessing",
                topics: ["Loading and exploring datasets", "Handling missing values", "Feature scaling and normalization", "Train-test split"]
              },
              {
                title: "4. Supervised Learning",
                topics: ["Linear Regression for predictions", "Logistic Regression for classification", "Decision Trees and Random Forests", "Model evaluation metrics"]
              },
              {
                title: "5. Unsupervised Learning",
                topics: ["K-Means clustering algorithm", "Principal Component Analysis (PCA)", "Dimensionality reduction", "Anomaly detection"]
              },
              {
                title: "6. Model Optimization",
                topics: ["Cross-validation techniques", "Hyperparameter tuning", "Overfitting and underfitting", "Model persistence"]
              },
              {
                title: "7. Next Steps",
                topics: ["Deep Learning introduction", "TensorFlow and PyTorch", "Computer Vision basics", "Natural Language Processing"]
              }
            ].map((section, index) => (
              <div key={index} className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.topics.map((topic, idx) => (
                    <li key={idx} className="text-neutral-600 dark:text-neutral-400 flex items-start">
                      <span className="mr-2 text-purple-500">→</span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Key Concepts */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
            Key Algorithms
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-purple-700 dark:text-purple-300">Classification</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Predict categorical outcomes using Logistic Regression, Decision Trees, Random Forests, and Support Vector Machines.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-pink-700 dark:text-pink-300">Regression</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Predict continuous values with Linear Regression, Polynomial Regression, and ensemble methods.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-blue-700 dark:text-blue-300">Clustering</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Discover patterns and group similar data points using K-Means, DBSCAN, and hierarchical clustering.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-green-700 dark:text-green-300">Neural Networks</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Introduction to deep learning with basic neural network architectures and TensorFlow/Keras.
              </p>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Additional Resources</h2>
          <ul className="space-y-2">
            <li>📖 Scikit-learn Documentation and Examples</li>
            <li>📖 Kaggle Datasets for Practice</li>
            <li>💻 Jupyter Notebooks with Complete Code</li>
            <li>🎥 Video Tutorials and Demonstrations</li>
            <li>💬 ML Community and Support Forum</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

