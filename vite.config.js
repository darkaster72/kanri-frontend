import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from '@honkhonk/vite-plugin-svgr';

/**
 * @type {import('vite').UserConfig}
 */
// https://vitejs.dev/config/
export default defineConfig({
  base: '/kanri-ui/', // used to deploy to github page
  plugins: [
    react(),
    svgr(),
  ],
});
