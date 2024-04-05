import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "build/",
  },
  plugins: [react()],
  server: {
    host: process.env.REACT_EXAMPLE__SERVER__HOST || "0.0.0.0",
    port:
      process.env.REACT_EXAMPLE__SERVER__PORT === undefined
        ? 5173
        : parseInt(process.env.REACT_EXAMPLE__SERVER__PORT, 10),
  },
});
