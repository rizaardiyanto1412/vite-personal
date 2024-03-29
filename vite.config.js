import { defineConfig } from "vite";

export default defineConfig({
  root: "src/public",
  build: {
    outDir: "../../dist/",
  },
  optimizeDeps: {
    include: ["canvas-confetti", "typed.js"],
  },
});
