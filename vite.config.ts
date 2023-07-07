import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.REACT_EXAMPLE_BASE_URL || "/",
  build: {
    outDir: process.env.REACT_EXAMPLE_BUILD_DIR || "build",
  },
});
