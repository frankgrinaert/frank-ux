import { resolve } from "path";
import { defineConfig } from "vite";

const pages = {
  main: resolve(__dirname, "index.html"),
  work: resolve(__dirname, "work/index.html"),
  wfpDesignSystem: resolve(__dirname, "work/wfp-design-system.html"),
  blok: resolve(__dirname, "work/blok.html"),
  cloudPortal: resolve(__dirname, "work/cloud-portal.html"),
  cloudPortalMobile: resolve(__dirname, "work/cloud-portal-mobile.html"),
  layoutSystem: resolve(__dirname, "work/layout-system.html"),
  aiAuthoring: resolve(__dirname, "work/ai-authoring.html"),
  aiCmpConcept: resolve(__dirname, "work/ai-cmp-concept.html"),
};

export default defineConfig({
  base: "/",
  build: {
    rollupOptions: {
      input: pages,
    },
  },
});
