import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages project site: https://mono-eyeddev.github.io/graduation/
export default defineConfig({
  plugins: [react()],
  base: "/graduation/",
});
