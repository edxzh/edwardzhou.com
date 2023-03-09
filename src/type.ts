export type Post = {
  url: string;
  frontmatter: {
    title: string;
    publishDate: string;
    timeToRead: string;
    description: string;
    image: { url: string; alt: string };
    featured?: boolean;
    tags: string[];
    author?: string;
  };
};
