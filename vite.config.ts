import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteTsConfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import styleXPlugin from "@stylexjs/babel-plugin";

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    tanstackStart({
      srcDirectory: "app",
    }),
    react({
      babel: {
        plugins: [
          [
            styleXPlugin,
            {
              dev: process.env.NODE_ENV === "development",
              runtimeInjection: false,
              genConditionalClasses: true,
              treeshakeCompensation: true,
            },
          ],
        ],
      },
    }),
    viteTsConfigPaths({ projects: ["./tsconfig.json"] }),
  ],
});
