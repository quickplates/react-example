/// <reference types="vite/client" />

type ImportMeta = {
  readonly env: ImportMetaEnv;
};

type ImportMetaEnv = {
  readonly BASE_URL: string;
};
