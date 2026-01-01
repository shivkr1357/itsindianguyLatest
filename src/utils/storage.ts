import { ref, uploadBytes, getDownloadURL, deleteObject, UploadResult } from "firebase/storage";
import { storage } from "@/config/firebase";

export interface UploadOptions {
  path?: string;
  contentType?: string;
}

/**
 * Upload a file to Firebase Storage
 * @param file - File to upload
 * @param userId - User ID for organizing files
 * @param options - Upload options
 * @returns Download URL of the uploaded file
 */
export const uploadFile = async (
  file: File,
  userId: string,
  options: UploadOptions = {}
): Promise<{ success: boolean; url?: string; error?: any }> => {
  try {
    const timestamp = Date.now();
    const fileName = `${timestamp}_${file.name}`;
    const path = options.path || `social-media/${userId}/${fileName}`;
    
    const storageRef = ref(storage, path);
    
    const metadata = options.contentType ? { contentType: options.contentType } : undefined;
    
    const snapshot: UploadResult = await uploadBytes(storageRef, file, metadata);
    const downloadURL = await getDownloadURL(snapshot.ref);
    
    return { success: true, url: downloadURL };
  } catch (error) {
    console.error("Error uploading file:", error);
    return { success: false, error };
  }
};

/**
 * Upload multiple files to Firebase Storage
 * @param files - Array of files to upload
 * @param userId - User ID for organizing files
 * @param options - Upload options
 * @returns Array of download URLs
 */
export const uploadMultipleFiles = async (
  files: File[],
  userId: string,
  options: UploadOptions = {}
): Promise<{ success: boolean; urls?: string[]; errors?: any[] }> => {
  try {
    const uploadPromises = files.map((file) => uploadFile(file, userId, options));
    const results = await Promise.all(uploadPromises);
    
    const urls: string[] = [];
    const errors: any[] = [];
    
    results.forEach((result, index) => {
      if (result.success && result.url) {
        urls.push(result.url);
      } else {
        errors.push({ file: files[index].name, error: result.error });
      }
    });
    
    return {
      success: errors.length === 0,
      urls: urls.length > 0 ? urls : undefined,
      errors: errors.length > 0 ? errors : undefined,
    };
  } catch (error) {
    console.error("Error uploading multiple files:", error);
    return { success: false, errors: [error] };
  }
};

/**
 * Delete a file from Firebase Storage
 * @param url - Download URL of the file to delete
 * @returns Success status
 */
export const deleteFile = async (url: string): Promise<{ success: boolean; error?: any }> => {
  try {
    // Extract path from URL
    const urlObj = new URL(url);
    const path = decodeURIComponent(urlObj.pathname.split("/o/")[1].split("?")[0]);
    
    const storageRef = ref(storage, path);
    await deleteObject(storageRef);
    
    return { success: true };
  } catch (error) {
    console.error("Error deleting file:", error);
    return { success: false, error };
  }
};

/**
 * Get file extension from filename
 */
export const getFileExtension = (filename: string): string => {
  return filename.split(".").pop()?.toLowerCase() || "";
};

/**
 * Validate file type
 */
export const isValidImageType = (file: File): boolean => {
  const validTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif", "image/webp"];
  return validTypes.includes(file.type);
};

/**
 * Validate file type
 */
export const isValidVideoType = (file: File): boolean => {
  const validTypes = ["video/mp4", "video/mov", "video/avi", "video/webm"];
  return validTypes.includes(file.type);
};

/**
 * Validate file size
 */
export const isValidFileSize = (file: File, maxSizeBytes: number): boolean => {
  return file.size <= maxSizeBytes;
};

