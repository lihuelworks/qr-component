import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        prependData: `
        @import "@/styles/_variables.scss";
        @import "@/styles/styles.scss";`,
      },
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    open: true,
  },
});
