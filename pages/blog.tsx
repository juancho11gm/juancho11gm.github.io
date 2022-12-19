import Head from 'next/head';
import { Container } from '@components/Container/Container';
import { Layout } from '@components/Layout/Layout';
import { Intro } from '@components/Intro/Intro';
import { Blog } from '@components/Blog/Blog';
import { PostType } from '@interfaces/post';
import { getAllPosts } from '@lib/api';

type Props = {
	allPosts: PostType[];
};

export default function BlogPage({ allPosts }: Props) {
	return (
		<>
			<Layout>
				<Head>
					<title>Next.js Blog Example</title>
					<meta property='og:image' content='/assets/blog/who-am-i/cover.jpg' />
					<meta
						name='description'
						content='Here you will find articles written by Juan Gonzalez.'
					/>
				</Head>
				<Container>
					<Intro />
					<Blog allPosts={allPosts} />
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
