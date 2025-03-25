import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import tsconfigPaths from "vite-tsconfig-paths";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            "babel-plugin-styled-components",
            {
              displayName: true,
              pure: true,
            },
          ],
        ],
      },
    }),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      // Add any path aliases your project might need
      src: resolve(__dirname, "./src"),
      react: resolve(__dirname, "./node_modules/react"),
      "react-dom": resolve(__dirname, "./node_modules/react-dom"),
      "styled-components": resolve(
        __dirname,
        "./node_modules/styled-components"
      ),
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
      "styled-components",
      "styletron-react",
      "baseui",
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
      input: {
        main: resolve(__dirname, "index.html"),
      },
      output: {
        manualChunks: {
          "react-vendor": [
            "react",
            "react-dom",
            "react-is",
            "prop-types",
            "react-reveal",
            "react-cursor-custom",
          ],
          styled: [
            "styled-components",
            "styletron-react",
            "styletron-engine-atomic",
          ],
          ui: ["baseui", "react-bootstrap", "bootstrap"],
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
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true,
    },
  },
  server: {
    port: 3000, // Match CRA's default port
    open: true, // Automatically open browser
  },
});
