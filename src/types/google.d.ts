// TypeScript declarations for Google Identity Services

interface GoogleAccounts {
  id: {
    initialize: (config: {
      client_id: string;
      callback: (response: CredentialResponse) => void;
      auto_select?: boolean;
      cancel_on_tap_outside?: boolean;
      itp_support?: boolean;
    }) => void;
    prompt: (notification?: (notification: PromptMomentNotification) => void) => void;
    disableAutoSelect: () => void;
    storeCredential: (credentials: { id: string; password: string }, callback: () => void) => void;
    cancel: () => void;
    onGoogleLibraryLoad: () => void;
    revoke: (accessToken: string, done: () => void) => void;
  };
  oauth2: {
    initTokenClient: (config: {
      client_id: string;
      scope: string;
      callback: (response: TokenResponse) => void;
    }) => {
      requestAccessToken: (overrideConfig?: { prompt?: string }) => void;
    };
  };
}

interface CredentialResponse {
  credential: string;
  select_by: string;
}

interface TokenResponse {
  access_token: string;
  expires_in: number;
  scope: string;
  token_type: string;
  error?: string;
}

interface PromptMomentNotification {
  isNotDisplayed(): boolean;
  isSkippedMoment(): boolean;
  isDismissedMoment(): boolean;
  getNotDisplayedReason(): string;
  getSkippedReason(): string;
  getDismissedReason(): string;
  getMomentType(): string;
}

declare global {
  interface Window {
    google?: GoogleAccounts;
  }
}

export {};

