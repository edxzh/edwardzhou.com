import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
import mdx from "@astrojs/mdx";

import remarkToc from "remark-toc";
import rehypeMinifyHtml from "rehype";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://edwardzhou.com",
  integrations: [
    tailwind(),
    alpinejs(),
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: { theme: "github-light" },
      remarkPlugins: [remarkToc],
      rehypePlugins: [rehypeMinifyHtml, rehypeHeadingIds],
      remarkRehype: {
        footnoteLabel: "Footnotes",
      },
    }),
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
