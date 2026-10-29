// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },

  // The stylesheet is small, so embed it in the HTML instead of a separate render-blocking request.
  build: {
    inlineStylesheets: "always",
  },
});
