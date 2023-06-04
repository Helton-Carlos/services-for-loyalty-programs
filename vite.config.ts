import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueTypeImports from "vite-plugin-vue-type-imports";
import Icons from "unplugin-icons/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueTypeImports(),
    Icons({
      compiler: 'vue3'
    }),
  ],
  resolve: {
    alias: [
      { find: "@/", replacement: "/src" },
      { find: "@/assets", replacement: "/src/assets" },
      { find: "@/components", replacement: "/src/components" },
      { find: "@/utils", replacement: "/src/utils" },
    ],
  },
});
