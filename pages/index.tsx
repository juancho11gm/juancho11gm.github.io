import Head from 'next/head';
import Link from 'next/link';
import { OverviewCard } from '@components/OverviewCard/OverviewCard';
import { Container } from '@components/Container/Container';
import { Layout } from '@components/Layout/Layout';
import { Intro } from '@components/Intro/Intro';
import { Blog, BlogProps } from '@components/Blog/Blog';
import { getAllPosts } from '@lib/api';

export default function Index({ allPosts }: BlogProps) {
	return (
		<>
			<Layout>
				<Head>
					<title>Juan González</title>
				</Head>
				<Container>
					<OverviewCard />
					<Link href='/about' className='underline mb-12 mt-6 block'>
						Read about me.
					</Link>
					<Blog allPosts={allPosts} offset={3} />
					<Link className='block my-6 text-purple-500' href='/blog'>
						Read more articles
					</Link>
				</Container>
			</Layout>
		</>
	);
}

/**
 * NextJS will pre-render this page at build time using
 * the props returned.
 */
export const getStaticProps = async () => {
	/**
	 * getAllPosts will fetch the _posts and will request
	 * the provided properties.
	 */
	const allPosts = getAllPosts([
		'title',
		'date',
		'slug',
		'author',
		'coverImage',
		'excerpt',
	]);

	return {
		props: { allPosts },
		// Next.js will attempt to re-generate the page:
		// - When a request comes in
		// - At most once every 60 seconds
		revalidate: 60, // In seconds
	};
};
