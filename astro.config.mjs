import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://www.sitegoeshere.com",
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    react(),
    robotsTxt({
      policy: [{ userAgent: "*", disallow: "/assets/*" }],
    }),
  ],
});
