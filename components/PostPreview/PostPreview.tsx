import Link from 'next/link';
import { DateFormatter } from '@components/DateFormatter/DateFormatter';
import { CoverImage } from '@components/CoverImage/CoverImage';
import { Avatar } from '@components/Avatar/avatar';
import { Author } from '@interfaces/author';
import { OrientationType } from '@interfaces/post';

type Props = {
	title: string;
	coverImage: string;
	orientation: OrientationType;
	date: string;
	excerpt: string;
	author: Author;
	slug: string;
};

const PostPreview = ({
	title,
	coverImage,
	orientation,
	date,
	excerpt,
	author,
	slug,
}: Props) => {
	return (
		<article>
			<CoverImage
				slug={slug}
				title={title}
				src={coverImage}
				orientation={orientation}
			/>
			<h3 className='text-3xl leading-snug mt-4'>
				<Link
					as={`/posts/${slug}`}
					href='/posts/[slug]'
					className='hover:underline'
				>
					{title}
				</Link>
			</h3>
			<p className='text-base leading-relaxed mb-4'>{excerpt}.</p>
			<div className='text-lg flex items-center gap-2'>
				<Avatar name={author.name} picture={author.picture} />
				<span className='font-bold'>{author.name}</span>
				·
				<DateFormatter dateString={date} />
			</div>
		</article>
	);
};

export { PostPreview };
