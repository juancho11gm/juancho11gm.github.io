import Link from 'next/link';
import { DateFormatter } from '@components/DateFormatter/DateFormatter';
import { CoverImage } from '@components/CoverImage/CoverImage';
import { Avatar } from '@components/Avatar/avatar';
import { Author } from '@interfaces/author';

type Props = {
	title: string;
	coverImage: string;
	date: string;
	excerpt: string;
	author: Author;
	slug: string;
};

const PostPreview = ({
	title,
	coverImage,
	date,
	excerpt,
	author,
	slug,
}: Props) => {
	return (
		<div>
			<div className='mb-5'>
				<CoverImage slug={slug} title={title} src={coverImage} />
			</div>
			<h3 className='text-3xl mb-3 leading-snug'>
				<Link
					as={`/posts/${slug}`}
					href='/posts/[slug]'
					className='hover:underline'
				>
					{title}
				</Link>
			</h3>
			<div className='text-lg mb-4'>
				<DateFormatter dateString={date} />
			</div>
			<p className='text-lg leading-relaxed mb-4'>{excerpt}</p>
			<div className='flex items-center'>
				<Avatar name={author.name} picture={author.picture} />
				<div className='font-bold'>{author.name}</div>
			</div>
		</div>
	);
};

export { PostPreview };