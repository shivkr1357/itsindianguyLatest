"use client";
import { createContext, useContext, useEffect, useState } from "react";
import {
  User,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithCredential,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth, googleProvider } from "@/config/firebase";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [autoSignInAttempted, setAutoSignInAttempted] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Automatic Google sign-in on page load
  useEffect(() => {
    // Wait for auth state to be determined and ensure we're in the browser
    if (typeof window === "undefined" || loading || autoSignInAttempted) {
      return;
    }

    // Only attempt if user is not already signed in
    if (user || auth.currentUser) {
      console.log("[Auto Sign-In] User already signed in, skipping auto sign-in");
      setAutoSignInAttempted(true);
      return;
    }

    const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    if (!googleClientId) {
      console.warn("[Auto Sign-In] Google Client ID not configured. Set NEXT_PUBLIC_GOOGLE_CLIENT_ID in .env.local");
      setAutoSignInAttempted(true);
      return;
    }

    console.log("[Auto Sign-In] Starting automatic sign-in process...");
    console.log("[Auto Sign-In] Using Google Client ID:", googleClientId.substring(0, 20) + "...");
    
    // Verify Firebase auth domain matches
    const authDomain = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN;
    console.log("[Auto Sign-In] Firebase Auth Domain:", authDomain);

    const handleCredentialResponse = async (response: { credential: string; select_by?: string }) => {
      console.log("[Auto Sign-In] 🔑 Credential response received!", {
        hasCredential: !!response.credential,
        credentialLength: response.credential?.length,
        selectBy: response.select_by,
        timestamp: new Date().toISOString(),
      });

      try {
        if (!response.credential) {
          console.error("[Auto Sign-In] ❌ No credential in response");
          setAutoSignInAttempted(true);
          return;
        }

        console.log("[Auto Sign-In] Creating Firebase credential...");
        // Use the credential to sign in with Firebase
        // Note: credential() is a static method on GoogleAuthProvider, not an instance method
        const credential = GoogleAuthProvider.credential(response.credential);
        
        if (!credential) {
          console.error("[Auto Sign-In] ❌ Failed to create Firebase credential");
          setAutoSignInAttempted(true);
          return;
        }

        console.log("[Auto Sign-In] Signing in with Firebase...");
        const userCredential = await signInWithCredential(auth, credential);
        
        console.log("[Auto Sign-In] ✅ Successfully signed in!", {
          uid: userCredential.user.uid,
          email: userCredential.user.email,
          displayName: userCredential.user.displayName,
        });
        
        // The user state will be updated automatically by onAuthStateChanged
        // But we can also set it explicitly to ensure immediate UI update
        setUser(userCredential.user);
        setAutoSignInAttempted(true);
      } catch (error: any) {
        console.error("[Auto Sign-In] Failed to sign in:", {
          error,
          code: error?.code,
          message: error?.message,
          stack: error?.stack,
        });

        // Provide more specific error messages
        if (error?.code === "auth/invalid-credential") {
          console.error("[Auto Sign-In] Invalid credential. This usually means:");
          console.error("  1. The Google OAuth Client ID doesn't match Firebase configuration");
          console.error("  2. The credential is expired or invalid");
          console.error("  3. The domain is not authorized in Google Cloud Console");
        } else if (error?.code === "auth/account-exists-with-different-credential") {
          console.error("[Auto Sign-In] Account exists with different credential");
        } else if (error?.code === "auth/operation-not-allowed") {
          console.error("[Auto Sign-In] Google sign-in is not enabled in Firebase");
        }

        setAutoSignInAttempted(true);
      }
    };

    const initializeAutoSignIn = () => {
      if (!window.google?.accounts?.id) {
        console.error("[Auto Sign-In] Google Identity Services not available");
        setAutoSignInAttempted(true);
        return;
      }

      try {
        console.log("[Auto Sign-In] Initializing Google Identity Services...");
        console.log("[Auto Sign-In] Callback function registered:", typeof handleCredentialResponse);
        
        // Initialize Google Identity Services with auto-select enabled
        window.google.accounts.id.initialize({
          client_id: googleClientId,
          callback: handleCredentialResponse,
          auto_select: true, // Automatically sign in if user is logged into Chrome
          cancel_on_tap_outside: false,
          itp_support: true, // Support Intelligent Tracking Prevention
        });
        
        console.log("[Auto Sign-In] Google Identity Services initialized successfully");

        // Add a small delay before prompting to ensure everything is ready
        setTimeout(() => {
          if (!window.google?.accounts?.id) {
            console.error("[Auto Sign-In] Google Identity Services not available when prompting");
            setAutoSignInAttempted(true);
            return;
          }

          console.log("[Auto Sign-In] Prompting One Tap sign-in...");
          // Prompt One Tap sign-in (this will automatically detect Chrome login)
          window.google.accounts.id.prompt((notification) => {
            console.log("[Auto Sign-In] One Tap prompt callback triggered");
            
            if (notification) {
              const notificationDetails = {
                isNotDisplayed: notification.isNotDisplayed(),
                isSkippedMoment: notification.isSkippedMoment(),
                isDismissedMoment: notification.isDismissedMoment(),
                getNotDisplayedReason: notification.getNotDisplayedReason?.(),
                getSkippedReason: notification.getSkippedReason?.(),
                getDismissedReason: notification.getDismissedReason?.(),
                getMomentType: notification.getMomentType?.(),
              };
              
              console.log("[Auto Sign-In] One Tap notification details:", notificationDetails);

              if (notification.isNotDisplayed()) {
                const reason = notification.getNotDisplayedReason?.();
                console.warn("[Auto Sign-In] ⚠️ One Tap not displayed. Reason:", reason);
                
                // Provide helpful guidance for common issues
                if (reason === "browser_not_supported" || reason === "invalid_client") {
                  console.warn("[Auto Sign-In] ⚠️ Configuration Issue Detected!");
                  console.warn("[Auto Sign-In] This usually means localhost is not authorized in Google Cloud Console.");
                  console.warn("[Auto Sign-In] Fix: Go to Google Cloud Console → APIs & Services → Credentials");
                  console.warn("[Auto Sign-In] → Edit your OAuth 2.0 Client ID → Add http://localhost and http://localhost:3000");
                  console.warn("[Auto Sign-In] → To both 'Authorized JavaScript origins' and 'Authorized redirect URIs'");
                } else if (reason === "opt_out_or_no_session") {
                  console.log("[Auto Sign-In] User opted out or no Google session. This is normal if user is not logged into Chrome.");
                } else if (reason === "suppressed_by_user") {
                  console.log("[Auto Sign-In] One Tap was suppressed by user settings.");
                } else if (reason === "unregistered_origin") {
                  console.error("[Auto Sign-In] ❌ Origin not registered! Add localhost to authorized origins in Google Cloud Console.");
                } else {
                  console.log("[Auto Sign-In] One Tap not available. Reason:", reason);
                }
              } else if (notification.isSkippedMoment()) {
                const reason = notification.getSkippedReason?.();
                console.log("[Auto Sign-In] One Tap skipped. Reason:", reason);
              } else if (notification.isDismissedMoment()) {
                const reason = notification.getDismissedReason?.();
                console.log("[Auto Sign-In] One Tap dismissed. Reason:", reason);
              } else {
                console.log("[Auto Sign-In] One Tap is being displayed or user is interacting with it.");
              }

              // Mark as attempted after notification
              setAutoSignInAttempted(true);
            } else {
              console.log("[Auto Sign-In] One Tap prompt completed (no notification object)");
              // Don't mark as attempted if no notification - might still be processing
              // setAutoSignInAttempted(true);
            }
          });
        }, 500); // Small delay to ensure page is fully loaded
      } catch (error) {
        console.error("[Auto Sign-In] Google Identity Services initialization failed:", error);
        setAutoSignInAttempted(true);
      }
    };

    // Load Google Identity Services script if not already loaded
    if (window.google?.accounts?.id) {
      console.log("[Auto Sign-In] Google Identity Services already loaded");
      initializeAutoSignIn();
    } else {
      console.log("[Auto Sign-In] Loading Google Identity Services script...");
      const script = document.createElement("script");
      script.src = "https://accounts.google.com/gsi/client";
      script.async = true;
      script.defer = true;
      script.onload = () => {
        console.log("[Auto Sign-In] Google Identity Services script loaded");
        // Wait a bit for the API to be fully available
        setTimeout(initializeAutoSignIn, 100);
      };
      script.onerror = () => {
        console.error("[Auto Sign-In] Failed to load Google Identity Services script");
        setAutoSignInAttempted(true);
      };
      document.head.appendChild(script);
    }
  }, [loading, user, autoSignInAttempted]);

  const signIn = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  const value = {
    user,
    loading,
    signIn,
    signUp,
    signInWithGoogle,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
