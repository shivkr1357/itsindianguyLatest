import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your Firebase configuration
// Replace these with your actual Firebase config values
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Firebase Storage and get a reference to the service
export const storage = getStorage(app);

// Google Auth Provider
export const googleProvider = new GoogleAuthProvider();

// Add custom parameters for Google sign-in
// Remove prompt to allow automatic sign-in with Chrome account
googleProvider.setCustomParameters({
  prompt: "none", // This allows automatic sign-in if user is already logged into Chrome
});

// Connect to auth emulator in development
// if (process.env.NODE_ENV === "development") {
//   try {
//     connectAuthEmulator(auth, "http://localhost:9099");
//     connectFirestoreEmulator(db, "localhost", 8080);
//   } catch (error) {
//     // Emulator might not be running, which is fine
//     console.log("Firebase Emulators not running");
//   }
// }

export default app;
