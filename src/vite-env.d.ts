/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: string;
  readonly NEXT_PUBLIC_EMAILJS_SERVICE_ID: string;
  readonly NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
