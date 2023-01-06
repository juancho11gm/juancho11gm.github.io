# Juan González Website

Hi, welcome to my website 👋🏻.

## Tech Stack

- NextJS.
  - React.
  - By default pre-renders HTML pages using Static Generation for performance and SEO.
  - SSG - ISG: Books and Blog Posts are generated at build time (using `getStaticProps` and `getStaticPaths`). For the home page the Blog Posts are revalidated every 60 seconds.
  - SWR: Stale While Revalidate is used for Client Side Data fetching.
- TypeScript.
- Tailwind.
- GrayMatter.
- React Markdown.
- React Syntax Highlighter.
- Spotify API.

# A statically generated blog using Next.js, Markdown, and TypeScript

This project was created using the existing [blog-starter](https://github.com/vercel/next.js/tree/canary/examples/blog-starter) as reference.

This blog showcases Next.js's [Static Generation](https://nextjs.org/docs/basic-features/pages) feature using Markdown files as the data source for creating the Blog Posts.

The blog posts are stored in `/_posts` as Markdown files with front matter support. Adding a new Markdown file in there will create a new blog post.

The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

React Markdown and React Syntax Highlighter are in charge of rendering the markdown content into HTML with Code Syntax Highlighting.

## Why ISG and SWR

It is recommend using Static Generation (with and without data) whenever possible because the pages can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

The Books and the Blog Posts can be pre-rendered ahead of a user's request so SSG and ISG work in this scenario.

The page does **not** show frequently updated data, and the page content does **not** change on every request.

On the other hand, Spotify data is fetched using SWR. That means the pages can skip pre-rendering some parts of a page and then use client-side JavaScript to populate them.

## Local Development

Make sure to setup the env variables.

```bash
  nvm use
  npm i
  npm run dev
```

Your blog should be up and running on [http://localhost:3000](http://localhost:3000)!.
