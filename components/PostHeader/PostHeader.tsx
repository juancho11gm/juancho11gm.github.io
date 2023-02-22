import { DateFormatter } from '@components/DateFormatter/DateFormatter';
import { CoverImage } from '@components/CoverImage/CoverImage';
import { PostTitle } from '@components/PostTitle/PostTitle';
import { Avatar } from '@components/Avatar/avatar';
import { OrientationType } from '@interfaces/post';
import { Author } from '@interfaces/author';
import Link from 'next/link';

type Props = {
	title: string;
	coverImage: string;
	date: string;
	author: Author;
	orientation: OrientationType;
};

const PostHeader = ({
	title,
	coverImage,
	date,
	author,
	orientation,
}: Props) => {
	return (
		<>
			<PostTitle>{title}</PostTitle>
			<div className='mb-6 sm:mb-12 flex justify-center'>
				<Avatar name={author.name} picture={author.picture} />
				<div className='ml-2'>
					<Link href={'/about'}>
						<div className='text-xl font-bold'>{author.name}</div>
					</Link>
					<DateFormatter dateString={date} />
				</div>
			</div>
			<div className='mb-8 md:mb-12 sm:mx-0'>
				<CoverImage
					orientation={orientation}
					title={title}
					src={coverImage}
					className='m-auto'
				/>
			</div>
		</>
	);
};

export { PostHeader };
