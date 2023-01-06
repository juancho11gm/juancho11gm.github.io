import { PostType } from '@interfaces/post';
import { MorePosts } from '@components/MorePosts/MorePosts';

export type BlogProps = {
	allPosts: PostType[];
	offset?: number;
};

const Blog = ({ allPosts, offset = allPosts.length }: BlogProps) => {
	const heroPosts = allPosts.slice(0, 2);
	const morePosts = allPosts.slice(2, offset);
	return (
		<section className='mb-20 mt-8 md:mt-12'>
			{heroPosts.length > 0 && (
				<div className='grid gap-10 lg:gap-10 md:grid-cols-2 '>
					<MorePosts posts={heroPosts} />
				</div>
			)}

			{morePosts.length > 0 && (
				<div className='grid gap-10 mt-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 '>
					<MorePosts posts={morePosts} />
				</div>
			)}
		</section>
	);
};

export { Blog };
