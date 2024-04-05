import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "build/",
  },
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
});
