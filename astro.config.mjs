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

// https://astro.build/config
export default defineConfig({
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
  ],
});
