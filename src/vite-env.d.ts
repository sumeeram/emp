/// <reference types="vite/client" />

// Extend Vite's environment variables if needed
interface ImportMetaEnv {
  readonly VITE_API_URL: string; // Example: Environment variable for API URL
  readonly VITE_APP_TITLE: string; // Example: Application title
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
