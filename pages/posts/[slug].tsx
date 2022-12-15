import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { Container } from '@components/Container/Container';
import { PostHeader } from '@components/PostHeader/PostHeader';
import { PostBody } from '@components/PostBody/PostBody';
import { Layout } from '@components/Layout/Layout';
import { getPostBySlug, getAllPosts } from '@lib/api';
import { PostType } from '@interfaces/post';

type Props = {
	post: PostType;
	morePosts: PostType[];
	preview?: boolean;
};

export default function Post({ post }: Props) {
	const router = useRouter();
	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />;
	}

	const title = `${post.title} | Juan González Blog`;

	return (
		<Layout>
			<Container>
				<article className='mb-32'>
					<Head>
						<title>{title}</title>
						<meta property='og:image' content={post.ogImage.url} />
						<meta name='description' content={post.excerpt} />
					</Head>
					<PostHeader
						title={post.title}
						coverImage={post.coverImage}
						date={post.date}
						author={post.author}
					/>
					<PostBody content={post.content} />
				</article>
			</Container>
		</Layout>
	);
}

type Params = {
	params: {
		slug: string;
	};
};

export async function getStaticProps({ params }: Params) {
	const post = getPostBySlug(params.slug, [
		'title',
		'date',
		'slug',
		'author',
		'content',
		'ogImage',
		'coverImage',
		'excerpt',
	]);

	return {
		props: {
			post: {
				...post,
			},
		},
	};
}

export async function getStaticPaths() {
	const posts = getAllPosts(['slug']);

	return {
		paths: posts.map((post) => {
			return {
				params: {
					slug: post.slug,
				},
			};
		}),
		fallback: false,
	};
}
