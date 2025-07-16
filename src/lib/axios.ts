import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios";

// Create axios instance
const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Get token from localStorage (or wherever you store it)
    const token =
      typeof window !== "undefined" ? localStorage.getItem("authToken") : null;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    // Handle different types of errors
    if (error.response) {
      // Server responded with error status
      const { status, data } = error.response;

      switch (status) {
        case 401:
          // Unauthorized - redirect to login or refresh token
          console.error("Authentication error:", data);
          // You can dispatch a logout action here
          if (typeof window !== "undefined") {
            localStorage.removeItem("authToken");
            // Optionally redirect to login page
            // window.location.href = '/login';
          }
          break;
        case 403:
          console.error("Forbidden:", data);
          break;
        case 404:
          console.error("Resource not found:", data);
          break;
        case 500:
          console.error("Server error:", data);
          break;
        default:
          console.error(`HTTP ${status}:`, data);
      }
    } else if (error.request) {
      // Request was made but no response received
      console.error("Network error:", error.request);
    } else {
      // Something else happened
      console.error("Request error:", error.message);
    }

    return Promise.reject(error);
  }
);

// API response wrapper type
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
}

// Helper function to handle API responses
export const handleApiResponse = <T>(
  response: AxiosResponse
): ApiResponse<T> => {
  return {
    success: true,
    data: response.data.data || response.data,
  };
};

// Helper function to handle API errors
export const handleApiError = (error: any): ApiResponse => {
  if (error.response?.data?.error) {
    return {
      success: false,
      error: error.response.data.error,
    };
  }

  return {
    success: false,
    error: error.message || "An unexpected error occurred",
  };
};

export default api;
