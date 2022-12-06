import classnames from 'classnames';
import Link from 'next/link';

type Props = {
	title: string;
	src: string;
	slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
	const image = (
		<img
			src={src}
			alt={`Cover Image for ${title}`}
			className={classnames('shadow-sm rounded-md', {
				'hover:shadow-lg transition-shadow duration-200': slug,
			})}
		/>
	);
	return (
		<div className='m-auto max-w-lg flex justify-center'>
			{slug ? (
				<Link as={`/posts/${slug}`} href='/posts/[slug]' aria-label={title}>
					{image}
				</Link>
			) : (
				image
			)}
		</div>
	);
};

export { CoverImage };
