import Link from 'next/link';
import { PostPreview } from '@components/PostPreview/PostPreview';
import { PostType } from '@interfaces/post';

type Props = {
	posts: PostType[];
};

const MorePosts = ({ posts }: Props) => {
	return (
		<section>
			<h2 className='mb-8 text-4xl font-bold tracking-tighter leading-tight'>
				More Posts
			</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-10 md:gap-y-32 mb-10'>
				{posts.map((post) => (
					<PostPreview
						key={post.slug}
						title={post.title}
						coverImage={post.coverImage}
						date={post.date}
						author={post.author}
						slug={post.slug}
						excerpt={post.excerpt}
					/>
				))}
			</div>
		</section>
	);
};

export { MorePosts };
