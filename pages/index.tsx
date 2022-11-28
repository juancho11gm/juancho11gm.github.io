import Head from 'next/head';
import Link from 'next/link';
import { OverviewCard } from '@components/OverviewCard/OverviewCard';
import { Container } from '@components/Container/Container';
import { HeroPost } from '@components/HeroPost/HeroPost';
import { Layout } from '@components/Layout/Layout';
import { MorePosts } from '@components/MorePosts/MorePosts';
import { Intro } from '@components/Intro/Intro';
import { getAllPosts } from '@lib/api';
import { PostType } from '@interfaces/post';

type Props = {
	allPosts: PostType[];
};

export default function Index({ allPosts }: Props) {
	const [heroPost] = allPosts;
	const morePosts = allPosts.slice(1, 3);

	return (
		<>
			<Layout>
				<Head>
					<title>Juan González</title>
				</Head>
				<Container>
					<OverviewCard />
					<Link href='/about' className='underline'>
						Read about me.
					</Link>
					<Intro />
					{heroPost && (
						<HeroPost
							title={heroPost.title}
							coverImage={heroPost.coverImage}
							date={heroPost.date}
							author={heroPost.author}
							slug={heroPost.slug}
							excerpt={heroPost.excerpt}
						/>
					)}
					{morePosts.length > 0 && <MorePosts posts={morePosts} />}
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
