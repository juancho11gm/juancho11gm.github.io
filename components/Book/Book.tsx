import { BookType } from '@interfaces/book';
import styles from './Book.module.css';

const Book = ({
	title = '',
	author,
	date,
	category,
	description,
	tags,
	imageUrl,
}: BookType) => {
	return (
		<article className='flex flex-wrap flex-col lg:flex-row items rounded-md shadow-lg dark:shadow-lg p-4'>
			<figure className={styles.imageContainer}>
				<img className='m-auto w-48' src={imageUrl} />
			</figure>
			<figcaption className='flex flex-col w-full mt-4'>
				<h3 className='font-bold'>{title}</h3>
				<p className='text-gray-500'>{author}</p>
				<div className='my-1 md:my-2 flex'>
					<time className='mr-4 md:mr-6'>{date}</time>
					<span>⭐️</span>
				</div>
				<p className='text-purple-700'>{category}</p>
				<p className='my-2 md:my-4 shrink-0 w-full'>{description}</p>
			</figcaption>
			<ul className='flex flex-wrap p-0 gap-2 w-full'>
				{tags.map((tag) => {
					return (
						<li>
							<span className='border-2 p-2 rounded-lg flex'>{tag}</span>
						</li>
					);
				})}
			</ul>
		</article>
	);
};

export { Book };
