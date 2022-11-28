import { DateFormatter } from '@components/DateFormatter/DateFormatter';
import { CoverImage } from '@components/CoverImage/CoverImage';
import { PostTitle } from '@components/PostTitle/PostTitle';
import { Avatar } from '@components/Avatar/avatar';
import { Author } from '@interfaces/author';

type Props = {
	title: string;
	coverImage: string;
	date: string;
	author: Author;
};

const PostHeader = ({ title, coverImage, date, author }: Props) => {
	return (
		<>
			<PostTitle>{title}</PostTitle>
			<div className='hidden md:block md:mb-12'>
				<Avatar name={author.name} picture={author.picture} />
			</div>
			<div className='mb-8 md:mb-16 sm:mx-0'>
				<CoverImage title={title} src={coverImage} />
			</div>
			<div className='max-w-2xl mx-auto'>
				<div className='block md:hidden mb-6'>
					<Avatar name={author.name} picture={author.picture} />
				</div>
				<div className='mb-6 text-lg'>
					<DateFormatter dateString={date} />
				</div>
			</div>
		</>
	);
};

export { PostHeader };
