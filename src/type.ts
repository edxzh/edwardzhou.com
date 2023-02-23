export type Post = {
  url: string;
  frontmatter: {
    title: string;
    publishDate: string;
    timeToRead: string;
    image: { url: string; alt: string };
  };
};
