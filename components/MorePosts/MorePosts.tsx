import { PostPreview } from '@components/PostPreview/PostPreview';
import { PostType } from '@interfaces/post';

type Props = {
	posts: PostType[];
};

const MorePosts = ({ posts }: Props) => {
	return (
		<>
			{posts.map((post) => (
				<PostPreview
					key={post.slug}
					title={post.title}
					coverImage={post.coverImage}
					date={post.date}
					author={post.author}
					slug={post.slug}
					excerpt={post.excerpt}
					orientation={post.orientation}
				/>
			))}
		</>
	);
};

export { MorePosts };
