import Head from 'next/head';
import Link from 'next/link';
import { OverviewCard } from '@components/OverviewCard/OverviewCard';
import { Container } from '@components/Container/Container';
import { Layout } from '@components/Layout/Layout';
import { Blog, BlogProps } from '@components/Blog/Blog';
import { getAllPosts } from '@lib/api';
import { SectionTitle } from '@components/SectionTitle/SectionTitle';

export default function Index({ allPosts }: BlogProps) {
	return (
		<>
			<Layout>
				<Head>
					<title>Juan González</title>
					<meta property='og:image' content='/assets/blog/who-am-i/cover.jpg' />
					<meta
						name='description'
						content='Here you will find books and articles suggested by Juan Gonzalez.'
					/>
				</Head>
				<Container>
					<OverviewCard />
					<Link href='/about' className='underline mb-12 mt-6 block'>
						Read about me.
					</Link>
					<SectionTitle text='Blog.' />
					<Blog allPosts={allPosts} />
				</Container>
			</Layout>
		</>
	);
}

/**
 * NextJS will pre-render this page at build time using
 * the props returned.
 *
 * SSG (Static Site generation)
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
		'orientation',
		'excerpt',
	]);

	return {
		props: { allPosts },
		// ISG (Incremental static generation)
		// Next.js will attempt to re-generate the page:
		// - When a request comes in
		// - At most once every 60 seconds
		revalidate: 60, // In seconds
	};
};
