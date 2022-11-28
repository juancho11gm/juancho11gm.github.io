# Juan González Website

Hi, welcome to my website 👋🏻.

## Tech Stack

- NextJS.
  - React.
  - SSR - ISG.
- TypeScript.
- Tailwind.
- GrayMatter.
- React Markdown.
- React syntax highlighter.
- SWR.
- Spotify API.

# A statically generated blog example using Next.js, Markdown, and TypeScript

This project was created using the existing [blog-starter](https://github.com/vercel/next.js/tree/canary/examples/blog-starter) as reference.

This blog showcases Next.js's [Static Generation](https://nextjs.org/docs/basic-features/pages) feature using Markdown files as the data source.

The blog posts are stored in `/_posts` as Markdown files with front matter support. Adding a new Markdown file in there will create a new blog post.

The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

## Local Development

Make sure to setup the env variables.

```bash
  npm i
  npm run dev
```

Your blog should be up and running on [http://localhost:3000](http://localhost:3000)!.
