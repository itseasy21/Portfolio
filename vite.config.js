import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import tsconfigPaths from "vite-tsconfig-paths";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      // Add any path aliases your project might need
      src: resolve(__dirname, "./src"),
      react: resolve(__dirname, "./node_modules/react"),
      "react-dom": resolve(__dirname, "./node_modules/react-dom"),
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
    include: [
      "@iconify/react",
      "react",
      "react-dom",
      "react-is",
      "prop-types",
      "react-reveal",
      "react-cursor-custom",
    ],
  },
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.[jt]sx?$/,
    exclude: [],
  },
  // Maintain CRA's public directory convention
  publicDir: "public",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Core React dependencies - keep everything React-related in one chunk
          if (
            id.includes("react") ||
            id.includes("prop-types") ||
            id.includes("react-is") ||
            id.includes("react-reveal") ||
            id.includes("react-cursor-custom")
          ) {
            return "react-vendor";
          }

          // UI Framework chunks
          if (id.includes("baseui/") || id.includes("styletron-")) {
            return "ui-base";
          }
          if (id.includes("react-bootstrap") || id.includes("bootstrap")) {
            return "ui-bootstrap";
          }
          if (id.includes("styled-components") || id.includes("glamor")) {
            return "ui-styled";
          }

          // Feature chunks
          if (id.includes("react-ga")) {
            return "analytics";
          }
          if (id.includes("react-icons") || id.includes("@iconify/react")) {
            return "icons";
          }

          // Image handling
          if (id.includes("react-rounded-image")) {
            return "image-utils";
          }

          // Node modules that don't match above go to vendor
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
        // Ensure consistent chunk naming
        chunkFileNames: "assets/[name]-[hash].js",
        // Ensure assets are properly hashed and organized
        assetFileNames: (assetInfo) => {
          const { name } = assetInfo;
          if (name.endsWith(".css")) {
            return "styles/[name]-[hash][extname]";
          }
          if (/\.(png|jpe?g|gif|svg|webp)$/.test(name)) {
            return "images/[name]-[hash][extname]";
          }
          if (/\.(woff2?|eot|ttf|otf)$/.test(name)) {
            return "fonts/[name]-[hash][extname]";
          }
          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
  server: {
    port: 3000, // Match CRA's default port
    open: true, // Automatically open browser
  },
});
