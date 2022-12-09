import { getAllPosts } from '@lib/api';
import { PostType } from '@interfaces/post';
import { HeroPost } from '@components/HeroPost/HeroPost';
import { MorePosts } from '@components/MorePosts/MorePosts';

export type BlogProps = {
	allPosts: PostType[];
	offset?: number;
};

const Blog = ({ allPosts, offset = allPosts.length }: BlogProps) => {
	const [heroPost] = allPosts;
	const morePosts = allPosts.slice(1, offset);
	return (
		<>
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
		</>
	);
};

export { Blog };
