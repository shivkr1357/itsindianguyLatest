import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

// Initialize Firebase Admin
const firebaseAdminConfig = {
  credential: cert({
    projectId: process.env.FIREBASE_PROJECT_ID || "",
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL || "",
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n") || "",
  }),
  databaseURL: `https://${
    process.env.FIREBASE_PROJECT_ID || "default"
  }.firebaseio.com`,
};

// Initialize the app if it hasn't been initialized
const apps = getApps();
let firebaseAdmin;

try {
  // Check if required environment variables are present
  if (
    !process.env.FIREBASE_PROJECT_ID ||
    !process.env.FIREBASE_CLIENT_EMAIL ||
    !process.env.FIREBASE_PRIVATE_KEY
  ) {
    console.warn(
      "Firebase Admin SDK environment variables are missing. Some features may not work."
    );
    // Create a mock configuration for development
    firebaseAdmin =
      apps.length === 0
        ? initializeApp({
            projectId: "mock-project",
            credential: cert({
              projectId: "mock-project",
              clientEmail: "mock@example.com",
              privateKey:
                "-----BEGIN PRIVATE KEY-----\nMOCK\n-----END PRIVATE KEY-----\n",
            }),
          })
        : apps[0];
  } else {
    firebaseAdmin =
      apps.length === 0 ? initializeApp(firebaseAdminConfig) : apps[0];
  }
} catch (error) {
  console.error("Failed to initialize Firebase Admin SDK:", error);
  // Fallback to mock configuration
  firebaseAdmin =
    apps.length === 0
      ? initializeApp({
          projectId: "mock-project",
          credential: cert({
            projectId: "mock-project",
            clientEmail: "mock@example.com",
            privateKey:
              "-----BEGIN PRIVATE KEY-----\nMOCK\n-----END PRIVATE KEY-----\n",
          }),
        })
      : apps[0];
}

// Initialize services
export const adminAuth = getAuth(firebaseAdmin);
export const adminDb = getFirestore(firebaseAdmin);

export default firebaseAdmin;
