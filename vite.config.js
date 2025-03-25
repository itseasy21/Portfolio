import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Add any path aliases your project might need
      src: resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.[jt]sx?$/,
    exclude: [],
  },
  // Maintain CRA's public directory convention
  publicDir: "public",
  build: {
    outDir: "build", // Match CRA output directory
    sourcemap: true,
  },
  server: {
    port: 3000, // Match CRA's default port
    open: true, // Automatically open browser
  },
});
