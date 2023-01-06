import Link from 'next/link';
import Image from 'next/image';
import classnames from 'classnames';
import { OrientationType } from '@interfaces/post';

type Props = {
	title: string;
	src: string;
	slug?: string;
	className?: string;
	orientation: OrientationType;
};

const CoverImage = ({ title, src, slug, className, orientation }: Props) => {
	const image = (
		<Image
			src={src}
			alt={`Cover Image for ${title}`}
			className={classnames('shadow-sm rounded-md max-h-full', {
				'hover:shadow-lg transition-shadow duration-200': slug,
			})}
			sizes='80vw'
			layout='fill'
			objectFit='cover'
		/>
	);
	return (
		<div
			style={{
				maxHeight: '40rem',
			}}
			className={classnames(
				'relative overflow-hidden transition-all bg-gray-100 rounded-md dark:bg-gray-800 hover:scale-105 aspect-square max-w-3xl',
				orientation === 'landscape' ? 'aspect-video' : 'aspect-square',
				className
			)}
		>
			{slug ? (
				<Link
					className='flex items-center'
					as={`/posts/${slug}`}
					href='/posts/[slug]'
					aria-label={title}
				>
					{image}
				</Link>
			) : (
				image
			)}
		</div>
	);
};

export { CoverImage };
