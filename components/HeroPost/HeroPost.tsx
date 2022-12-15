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
		<section
			className='md:grid gap-x-8 mb-10'
			style={{
				gridTemplateColumns: 'auto auto',
			}}
		>
			<div className='mb-5 md:mb-0'>
				<CoverImage title={title} src={coverImage} slug={slug} />
			</div>
			<div className='flex flex-col justify-end'>
				<div>
					<h2 className='mb-1 text-4xl lg:text-5xl leading-tight'>
						<Link
							as={`/posts/${slug}`}
							href='/posts/[slug]'
							className='hover:underline'
						>
							{title}
						</Link>
					</h2>

					<div className='mb-2 md:mb-0 text-lg'>
						<DateFormatter dateString={date} />
					</div>
				</div>
				<div>
					<p className='text-lg leading-relaxed mb-4'>{excerpt}.</p>
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
