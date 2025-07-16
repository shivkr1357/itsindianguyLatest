import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

// Only initialize Firebase Admin on the server side
let firebaseAdmin: any = null;
let adminAuth: any = null;
let adminDb: any = null;

if (typeof window === "undefined") {
  // Server-side only
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
      const apps = getApps();
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
      // Initialize Firebase Admin with real credentials
      const firebaseAdminConfig = {
        credential: cert({
          projectId: process.env.FIREBASE_PROJECT_ID,
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
          privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        }),
        databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`,
      };

      const apps = getApps();
      firebaseAdmin =
        apps.length === 0 ? initializeApp(firebaseAdminConfig) : apps[0];
    }

    // Initialize services
    adminAuth = getAuth(firebaseAdmin);
    adminDb = getFirestore(firebaseAdmin);
  } catch (error) {
    console.error("Failed to initialize Firebase Admin SDK:", error);
    // Create mock services
    adminAuth = {
      verifyIdToken: async () => ({ uid: "mock-uid" }),
    };
    adminDb = {
      collection: () => ({
        doc: () => ({
          get: async () => ({ exists: false, data: () => null }),
          set: async () => ({}),
          update: async () => ({}),
          delete: async () => ({}),
        }),
        add: async () => ({ id: "mock-id" }),
        where: () => ({
          orderBy: () => ({
            limit: () => ({
              get: async () => ({ docs: [] }),
            }),
          }),
        }),
      }),
    };
  }
}

export { adminAuth, adminDb };
export default firebaseAdmin;
