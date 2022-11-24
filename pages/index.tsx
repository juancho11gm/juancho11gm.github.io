import Head from 'next/head';
import Link from 'next/link';
import { OverviewCard } from '@components/OverviewCard/OverviewCard';
import { Container } from '@components/Container/Container';
import { Layout } from '@components/Layout/Layout';
import MoreStories from '@components/more-stories';
import HeroPost from '@components/hero-post';
import Intro from '@components/intro';
import { getAllPosts } from 'lib/api';
import Post from '@interfaces/post';
import { WEBSITE_TITLE } from '../lib/constants';

type Props = {
	allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
	const heroPost = allPosts[0];
	const morePosts = allPosts.slice(1, 3);

	return (
		<>
			<Layout>
				<Head>
					<title>{WEBSITE_TITLE}</title>
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
					{morePosts.length > 0 && <MoreStories posts={morePosts} />}
				</Container>
			</Layout>
		</>
	);
}

export const getStaticProps = async () => {
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
	};
};
