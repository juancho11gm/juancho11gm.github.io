import Head from 'next/head';
import { Container } from '@components/Container/Container';
import { HeroPost } from '@components/HeroPost/HeroPost';
import { Layout } from '@components/Layout/Layout';
import { MorePosts } from '@components/MorePosts/MorePosts';
import { getAllPosts } from '@lib/api';
import { PostType } from '@interfaces/post';
import { Intro } from '@components/Intro/Intro';

type Props = {
	allPosts: PostType[];
};

export default function Blog({ allPosts }: Props) {
	const heroPost = allPosts[0];
	const morePosts = allPosts.slice(1);
	return (
		<>
			<Layout>
				<Head>
					<title>Next.js Blog Example</title>
				</Head>
				<Container>
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
