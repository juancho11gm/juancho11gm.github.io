---
title: 'What the heck is CSR, SSR, SSG and ISR?'
excerpt: 'Server Side Rendering, Client Side Rendering, Static Site Generation and Incremental Static Regeneration explained'
coverImage: '/assets/blog/ssr-csr-ssg-isr/ssr-csr-ssg-isr.jpg'
orientation: square
date: '2023-01-05'
author:
  name: Juan G
  picture: '/assets/me/profilepic.jpg'
ogImage:
  url: '/assets/blog/ssr-csr-ssg-isr/ssr-csr-ssg-isr.jpg'
---

I've been struggling with CSR, SSR, SSG and ISG for a while. I worked with [Create React App](https://create-react-app.dev) before, but I felt overwhelmed with all the available terms when working with frameworks such as **NextJS**.

Now, after playing around with these concepts, I think I get them.

First of all, we are talking about different ways to render our web application. So, we need to take into account what are the differences between them when generating and serving the HTML to the browser.

I encourage you to try them by your own. The best way to notice how these alternatives work is by doing it yourself.

## Client Side Rendering

When you create a web application with **Create React App** you are working with Client Side Rendering. But what does it mean?.

**CSR** allows us to render the websites entirely in the browser using JavaScript.

So, first the page is rendered in the browser and then the content is injected with JavaScript.

You can inspect the source code of the website with right-click. If you can't see the website content in the HTML file, it is injected by JavaScript after loading the page.

![Juango Blog](/assets/blog/ssr-csr-ssg-isr/csr-ss.png)
_Inspect the website and search for the content._

When navigating betwen pages, the CSR pages will load very fast since we don't have to wait for the **initial** markup.
However, the performance may vary when fetching data with CSR. We will have a loading state while the data is fetched.
So, we have to wait until the request is finished to render the content.

That data is fetched on **every** page request, so we will get the most updated one.

Because you only get the bare-bones in the HTML document without all the information, **Search Engine Optimization will suffer**.

Search Engines will crawl the markup for indexing the content. So probably you will get a **lower SEO** when working with CSR.

If SEO is important for your business, you can use libraries like [react-helmet](https://github.com/nfl/react-helmet) to manage the head tag information (title, meta tags, link tags...) or you can work hand in hand with SSR or SSG for **pre-rendering** as much information as possible.

TODO: insert CSR code example.

## Server Side Rendering

## Static Site Generation

## Incremental Static Regeneration

## Conclusion

You can use whatever way you want, according to your app needs. You can even use them together, so you can have different rendering approaches between pages.

Just take into account:

- Data Refresh.
- SEO: Will the website be available for Search Engines Indexing?.
- Performance.
