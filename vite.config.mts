import { lingui } from "@lingui/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const host = process.env.REACT_EXAMPLE__SERVER__HOST || "0.0.0.0";
const port =
  process.env.REACT_EXAMPLE__SERVER__PORT === undefined
    ? 5173
    : parseInt(process.env.REACT_EXAMPLE__SERVER__PORT, 10);

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "build/",
  },
  plugins: [
    react({
      babel: {
        plugins: ["@lingui/babel-plugin-lingui-macro"],
      },
    }),
    lingui(),
  ],
  server: {
    host: host,
    port: port,
  },
});
