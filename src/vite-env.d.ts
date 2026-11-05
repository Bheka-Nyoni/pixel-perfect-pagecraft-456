/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Formspree endpoint URL, or a Web3Forms access key. */
  readonly VITE_FORM_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
