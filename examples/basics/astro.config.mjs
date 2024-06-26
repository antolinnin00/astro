import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import tailwindConfigViewer from "astro-tailwind-config-viewer";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), tailwindConfigViewer()],
  output: "server",
  adapter: vercel()
});