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

const HeroPost = ({
	title,
	coverImage,
	date,
	excerpt,
	author,
	slug,
}: Props) => {
	return (
		<section>
			<div className='mb-8 md:mb-16'>
				<CoverImage title={title} src={coverImage} slug={slug} />
			</div>
			<div className='md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-10'>
				<div>
					<h3 className='mb-4 text-4xl lg:text-5xl leading-tight'>
						<Link
							as={`/posts/${slug}`}
							href='/posts/[slug]'
							className='hover:underline'
						>
							{title}
						</Link>
					</h3>

					<div className='mb-4 md:mb-0 text-lg'>
						<DateFormatter dateString={date} />
					</div>
				</div>
				<div>
					<p className='text-lg leading-relaxed mb-4'>{excerpt}</p>
					<div className='flex items-center'>
						<Avatar name={author.name} picture={author.picture} />
						<div className='text-xl font-bold'>{author.name}</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export { HeroPost };
