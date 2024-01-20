import { defineConfig } from "vite";

export default defineConfig({
  root: "src/public",
  build: {
    outDir: "../../dist/",
    rollupOptions: {
      external: ["canvas-confetti", "typed.js"],
    },
  },
});
