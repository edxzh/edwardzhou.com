# About The Project

my personal blog website

## Built With
![Astro](https://img.shields.io/badge/Astro-0C1222?style=for-the-badge&logo=astro&logoColor=FDFDFE)
![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-%2338b2ac?style=flat-square&logo=tailwind-css&logoColor=white)

## Preview
https://edwardzhou.com

## How to add a new blog
Add a new `.mdx` file in the `/src/pages/posts` folder, the name of the .mdx file will become the blog url. follow the format of the other mdx files to write your blog.

if your blog includes images or videos, you can put them in
* public/ folder, or
* third-party static file host platform.
then refer the files in the markdown

### more about [mdx](https://github.com/mdx-js/mdx) file

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `yarn install`         | Installs dependencies                            |
| `yarn run dev`         | Starts local dev server at `localhost:3000`      |
| `yarn lint`            | Linting                                          |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |
