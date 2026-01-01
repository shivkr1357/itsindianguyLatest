"use client";

import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "@/context/AuthContext";
import { SocialPlatform, PLATFORM_CONSTRAINTS, PostContent } from "@/types/social-media";
import { uploadFile, isValidImageType, isValidVideoType, isValidFileSize } from "@/utils/storage";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaImage, FaVideo, FaTimes } from "react-icons/fa";

interface ConnectedAccount {
  platform: SocialPlatform;
  platformAccountName: string;
}

interface PostComposerProps {
  onPostSuccess?: (results: any) => void;
  onPostError?: (error: string) => void;
}

const platformIcons: Record<SocialPlatform, React.ReactNode> = {
  facebook: <FaFacebook className="w-5 h-5" />,
  instagram: <FaInstagram className="w-5 h-5" />,
  twitter: <FaTwitter className="w-5 h-5" />,
  linkedin: <FaLinkedin className="w-5 h-5" />,
  youtube: <FaYoutube className="w-5 h-5" />,
};

export default function PostComposer({ onPostSuccess, onPostError }: PostComposerProps) {
  const { user } = useAuth();
  const [text, setText] = useState("");
  const [selectedPlatforms, setSelectedPlatforms] = useState<SocialPlatform[]>([]);
  const [connectedAccounts, setConnectedAccounts] = useState<ConnectedAccount[]>([]);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [videoPreview, setVideoPreview] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [posting, setPosting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const imageInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (user) {
      fetchConnectedAccounts();
    }
  }, [user]);

  useEffect(() => {
    validatePlatforms();
  }, [text, imageFile, videoFile, selectedPlatforms]);

  const fetchConnectedAccounts = async () => {
    if (!user) return;

    try {
      const token = await user.getIdToken();
      const response = await fetch("/api/social/accounts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setConnectedAccounts(data.accounts || []);
      }
    } catch (error) {
      console.error("Error fetching accounts:", error);
    }
  };

  const validatePlatforms = () => {
    const newErrors: Record<string, string> = {};
    const availablePlatforms = connectedAccounts.map((acc) => acc.platform);

    // Check text length for selected platforms
    selectedPlatforms.forEach((platform) => {
      if (!availablePlatforms.includes(platform)) {
        newErrors[platform] = "Account not connected";
        return;
      }

      const constraints = PLATFORM_CONSTRAINTS[platform];
      
      if (text.length > constraints.maxTextLength) {
        newErrors[platform] = `Text exceeds ${constraints.maxTextLength} characters`;
      }

      // Check if platform supports the content type
      if (imageFile && !constraints.supportsImages) {
        newErrors[platform] = "Platform does not support images";
      }

      if (videoFile && !constraints.supportsVideos) {
        newErrors[platform] = "Platform does not support videos";
      }

      // Check file sizes
      if (imageFile) {
        if (constraints.maxImageSize && imageFile.size > constraints.maxImageSize) {
          newErrors[platform] = `Image exceeds ${Math.round(constraints.maxImageSize / 1024 / 1024)}MB`;
        }
      }

      if (videoFile) {
        if (constraints.maxVideoSize && videoFile.size > constraints.maxVideoSize) {
          newErrors[platform] = `Video exceeds ${Math.round(constraints.maxVideoSize / 1024 / 1024)}MB`;
        }
      }
    });

    setErrors(newErrors);
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!isValidImageType(file)) {
      alert("Please select a valid image file (JPEG, PNG, GIF, or WebP)");
      return;
    }

    setImageFile(file);
    setVideoFile(null);
    setVideoPreview(null);
    setVideoUrl(null);

    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleVideoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!isValidVideoType(file)) {
      alert("Please select a valid video file (MP4, MOV, AVI, or WebM)");
      return;
    }

    setVideoFile(file);
    setImageFile(null);
    setImagePreview(null);
    setImageUrl(null);

    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setVideoPreview(URL.createObjectURL(file));
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImageFile(null);
    setImagePreview(null);
    setImageUrl(null);
    if (imageInputRef.current) {
      imageInputRef.current.value = "";
    }
  };

  const removeVideo = () => {
    setVideoFile(null);
    setVideoPreview(null);
    setVideoUrl(null);
    if (videoInputRef.current) {
      videoInputRef.current.value = "";
    }
  };

  const uploadMedia = async () => {
    if (!user) return;

    setUploading(true);
    try {
      if (imageFile) {
        const result = await uploadFile(imageFile, user.uid, {
          path: `social-media/${user.uid}/images/${Date.now()}_${imageFile.name}`,
        });
        if (result.success && result.url) {
          setImageUrl(result.url);
        } else {
          throw new Error("Failed to upload image");
        }
      }

      if (videoFile) {
        const result = await uploadFile(videoFile, user.uid, {
          path: `social-media/${user.uid}/videos/${Date.now()}_${videoFile.name}`,
        });
        if (result.success && result.url) {
          setVideoUrl(result.url);
        } else {
          throw new Error("Failed to upload video");
        }
      }
    } catch (error: any) {
      alert(error.message || "Failed to upload media");
      setUploading(false);
      return false;
    } finally {
      setUploading(false);
    }

    return true;
  };

  const handlePost = async () => {
    if (!user) return;

    if (selectedPlatforms.length === 0) {
      alert("Please select at least one platform");
      return;
    }

    if (Object.keys(errors).length > 0) {
      alert("Please fix the errors before posting");
      return;
    }

    // Upload media first if needed
    if (imageFile || videoFile) {
      const uploadSuccess = await uploadMedia();
      if (!uploadSuccess) return;
    }

    setPosting(true);

    try {
      const token = await user.getIdToken();
      const postData: PostContent = {
        text,
        ...(imageUrl && { imageUrl }),
        ...(videoUrl && { videoUrl }),
        platforms: selectedPlatforms,
      };

      const response = await fetch("/api/social/post", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      const result = await response.json();

      if (response.ok) {
        // Reset form
        setText("");
        setSelectedPlatforms([]);
        setImageFile(null);
        setVideoFile(null);
        setImagePreview(null);
        setVideoPreview(null);
        setImageUrl(null);
        setVideoUrl(null);
        
        if (onPostSuccess) {
          onPostSuccess(result);
        }
      } else {
        if (onPostError) {
          onPostError(result.error || "Failed to post");
        } else {
          alert(result.error || "Failed to post");
        }
      }
    } catch (error: any) {
      const errorMessage = error.message || "Failed to post";
      if (onPostError) {
        onPostError(errorMessage);
      } else {
        alert(errorMessage);
      }
    } finally {
      setPosting(false);
    }
  };

  const togglePlatform = (platform: SocialPlatform) => {
    if (selectedPlatforms.includes(platform)) {
      setSelectedPlatforms(selectedPlatforms.filter((p) => p !== platform));
    } else {
      setSelectedPlatforms([...selectedPlatforms, platform]);
    }
  };

  const getAvailablePlatforms = (): SocialPlatform[] => {
    return connectedAccounts.map((acc) => acc.platform);
  };

  const getCharacterCount = (platform: SocialPlatform): { current: number; max: number } => {
    const constraints = PLATFORM_CONSTRAINTS[platform];
    return {
      current: text.length,
      max: constraints.maxTextLength,
    };
  };

  return (
    <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Create Post</h2>

      {/* Text Input */}
      <div className="mb-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What's on your mind?"
          className="w-full p-4 border border-gray-300 dark:border-gray-700 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-700 dark:text-white"
          rows={6}
        />
        {selectedPlatforms.length > 0 && (
          <div className="mt-2 space-y-1">
            {selectedPlatforms.map((platform) => {
              const count = getCharacterCount(platform);
              const isOverLimit = count.current > count.max;
              return (
                <div key={platform} className="flex items-center gap-2 text-sm">
                  <span className="flex items-center gap-1">
                    {platformIcons[platform]}
                    <span className="capitalize">{platform}:</span>
                  </span>
                  <span className={isOverLimit ? "text-red-500" : "text-gray-600 dark:text-gray-400"}>
                    {count.current} / {count.max}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Media Upload */}
      <div className="mb-4 flex gap-4">
        <div>
          <input
            ref={imageInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageSelect}
            className="hidden"
            id="image-upload"
          />
          <label
            htmlFor="image-upload"
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg cursor-pointer transition-colors"
          >
            <FaImage />
            <span>Add Image</span>
          </label>
        </div>

        <div>
          <input
            ref={videoInputRef}
            type="file"
            accept="video/*"
            onChange={handleVideoSelect}
            className="hidden"
            id="video-upload"
          />
          <label
            htmlFor="video-upload"
            className="flex items-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg cursor-pointer transition-colors"
          >
            <FaVideo />
            <span>Add Video</span>
          </label>
        </div>
      </div>

      {/* Media Previews */}
      {imagePreview && (
        <div className="mb-4 relative">
          <img src={imagePreview} alt="Preview" className="max-w-full h-auto rounded-lg" />
          <button
            onClick={removeImage}
            className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-2"
          >
            <FaTimes />
          </button>
        </div>
      )}

      {videoPreview && (
        <div className="mb-4 relative">
          <video src={videoPreview} controls className="max-w-full h-auto rounded-lg" />
          <button
            onClick={removeVideo}
            className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-2"
          >
            <FaTimes />
          </button>
        </div>
      )}

      {/* Platform Selection */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3">Select Platforms</h3>
        <div className="flex flex-wrap gap-3">
          {getAvailablePlatforms().map((platform) => {
            const isSelected = selectedPlatforms.includes(platform);
            const hasError = errors[platform];
            const account = connectedAccounts.find((acc) => acc.platform === platform);

            return (
              <button
                key={platform}
                onClick={() => togglePlatform(platform)}
                disabled={!!hasError}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-all ${
                  isSelected
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-white dark:bg-neutral-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-500"
                } ${hasError ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                title={hasError || account?.platformAccountName}
              >
                {platformIcons[platform]}
                <span className="capitalize">{platform}</span>
                {hasError && <span className="text-red-500 text-xs">⚠</span>}
              </button>
            );
          })}
        </div>
        {getAvailablePlatforms().length === 0 && (
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
            No connected accounts. Please connect at least one social media account.
          </p>
        )}
      </div>

      {/* Error Messages */}
      {Object.keys(errors).length > 0 && (
        <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
          <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">Errors:</h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-red-700 dark:text-red-300">
            {Object.entries(errors).map(([platform, error]) => (
              <li key={platform}>
                <span className="capitalize">{platform}:</span> {error}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Post Button */}
      <button
        onClick={handlePost}
        disabled={posting || uploading || selectedPlatforms.length === 0 || Object.keys(errors).length > 0}
        className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {uploading ? "Uploading..." : posting ? "Posting..." : "Post to Selected Platforms"}
      </button>
    </div>
  );
}

