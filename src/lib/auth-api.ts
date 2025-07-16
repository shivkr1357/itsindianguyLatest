// Authentication API utility functions

export interface UserData {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  emailVerified: boolean;
  lastSignInTime?: string;
  creationTime?: string;
  providerId?: string;
}

export interface AuthResponse {
  message: string;
  user: UserData;
}

export interface ErrorResponse {
  error: string;
}

// Sign up with email and password
export async function signUpAPI(
  email: string,
  password: string
): Promise<AuthResponse> {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Signup failed");
  }

  return data;
}

// Sign in with email and password
export async function signInAPI(
  email: string,
  password: string
): Promise<AuthResponse> {
  const response = await fetch("/api/auth/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Signin failed");
  }

  return data;
}

// Sign in with Google
export async function signInWithGoogleAPI(
  idToken: string
): Promise<AuthResponse> {
  const response = await fetch("/api/auth/google", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ idToken }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Google signin failed");
  }

  return data;
}

// Logout
export async function logoutAPI(): Promise<{ message: string }> {
  const response = await fetch("/api/auth/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Logout failed");
  }

  return data;
}

// Get current user details
export async function getCurrentUserAPI(): Promise<AuthResponse> {
  const response = await fetch("/api/auth/user", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Failed to get user details");
  }

  return data;
}

// Update user profile
export async function updateProfileAPI(
  displayName?: string,
  photoURL?: string
): Promise<AuthResponse> {
  const response = await fetch("/api/auth/update-profile", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ displayName, photoURL }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Failed to update profile");
  }

  return data;
}

// Check if user is authenticated
export async function checkAuthStatus(): Promise<boolean> {
  try {
    await getCurrentUserAPI();
    return true;
  } catch (error) {
    return false;
  }
}
