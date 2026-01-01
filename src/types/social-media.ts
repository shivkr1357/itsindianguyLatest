export type SocialPlatform =
  | "facebook"
  | "instagram"
  | "twitter"
  | "linkedin"
  | "youtube";

export interface SocialAccount {
  id: string;
  userId: string;
  platform: SocialPlatform;
  accessToken: string;
  refreshToken?: string;
  tokenExpiry?: number; // Unix timestamp
  platformAccountId: string; // Page ID, Channel ID, etc.
  platformAccountName: string; // Display name
  platformAccountType?: "page" | "profile" | "channel" | "company";
  metadata?: {
    pageId?: string; // For Facebook Pages
    instagramBusinessAccountId?: string; // For Instagram
    orgId?: string; // For LinkedIn Company Pages
    channelId?: string; // For YouTube
    profilePicture?: string;
    [key: string]: any;
  };
  createdAt: any;
  updatedAt: any;
  isActive: boolean;
}

export interface PostContent {
  text: string;
  imageUrl?: string;
  videoUrl?: string;
  platforms: SocialPlatform[];
  scheduledAt?: number; // Unix timestamp for scheduled posts
}

export interface PostResult {
  platform: SocialPlatform;
  success: boolean;
  postId?: string;
  error?: string;
  url?: string;
}

export interface SocialPost {
  id?: string;
  userId: string;
  text: string;
  imageUrl?: string;
  videoUrl?: string;
  platforms: SocialPlatform[];
  results: PostResult[];
  createdAt: any;
  updatedAt: any;
  status: "success" | "partial" | "failed";
  totalPlatforms: number;
  successfulPlatforms: number;
  failedPlatforms: number;
}

export interface UserSocialStats {
  userId: string;
  totalPosts: number;
  totalSuccessfulPosts: number;
  totalFailedPosts: number;
  postsByPlatform: Record<
    SocialPlatform,
    {
      total: number;
      successful: number;
      failed: number;
    }
  >;
  connectedAccounts: number;
  connectedPlatforms: SocialPlatform[];
  lastPostAt?: any;
  createdAt: any;
  updatedAt: any;
}

export interface PlatformConstraints {
  maxTextLength: number;
  supportsImages: boolean;
  supportsVideos: boolean;
  minImageSize?: number; // in bytes
  maxImageSize?: number; // in bytes
  minVideoSize?: number; // in bytes
  maxVideoSize?: number; // in bytes
  supportedImageFormats?: string[];
  supportedVideoFormats?: string[];
  requiresText?: boolean;
}

export const PLATFORM_CONSTRAINTS: Record<SocialPlatform, PlatformConstraints> =
  {
    facebook: {
      maxTextLength: 5000,
      supportsImages: true,
      supportsVideos: true,
      maxImageSize: 4 * 1024 * 1024, // 4MB
      maxVideoSize: 1024 * 1024 * 1024, // 1GB
      supportedImageFormats: ["jpg", "jpeg", "png", "gif", "webp"],
      supportedVideoFormats: ["mp4", "mov", "avi", "webm"],
    },
    instagram: {
      maxTextLength: 2200,
      supportsImages: true,
      supportsVideos: true,
      maxImageSize: 8 * 1024 * 1024, // 8MB
      maxVideoSize: 100 * 1024 * 1024, // 100MB
      supportedImageFormats: ["jpg", "jpeg"],
      supportedVideoFormats: ["mp4"],
      requiresText: false,
    },
    twitter: {
      maxTextLength: 280,
      supportsImages: true,
      supportsVideos: true,
      maxImageSize: 5 * 1024 * 1024, // 5MB
      maxVideoSize: 512 * 1024 * 1024, // 512MB
      supportedImageFormats: ["jpg", "jpeg", "png", "gif", "webp"],
      supportedVideoFormats: ["mp4"],
    },
    linkedin: {
      maxTextLength: 3000,
      supportsImages: true,
      supportsVideos: true,
      maxImageSize: 5 * 1024 * 1024, // 5MB
      maxVideoSize: 200 * 1024 * 1024, // 200MB
      supportedImageFormats: ["jpg", "jpeg", "png", "gif"],
      supportedVideoFormats: ["mp4"],
    },
    youtube: {
      maxTextLength: 5000,
      supportsImages: false,
      supportsVideos: true,
      maxVideoSize: 128 * 1024 * 1024 * 1024, // 128GB
      supportedVideoFormats: ["mp4", "mov", "avi", "wmv", "flv", "webm"],
      requiresText: true, // Title/description required
    },
  };
