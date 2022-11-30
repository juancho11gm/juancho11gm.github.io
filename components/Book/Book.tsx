import classNames from 'classnames';
import styles from './Book.module.css';

const Book = ({ imageUrl }) => {
	return (
		<article className='flex flex-col lg:flex-row items rounded-md shadow-lg dark:shadow-purple-600'>
			<figure className={classNames(styles.imageContainer, 'p-4')}>
				<img className='m-auto w-48' src={imageUrl} />
			</figure>
			<figcaption className='p-4 flex flex-col w-full'>
				<h3 className='font-bold'>Book Title</h3>
				<p className='text-gray-500'>Author</p>
				<div className='my-1 md:my-2 flex'>
					<time className='mr-4 md:mr-6'>date</time>
					<span>⭐️</span>
				</div>
				<p className='text-purple-700'>category</p>
				<p className='my-2 md:my-4 shrink-0 w-full'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
					molestias enim voluptas iusto architecto, nulla mollitia nobis
					perspiciatis exercitationem magni fugiat eius aperiam dignissimos.
					Eligendi optio dolores dolorum! Vel, quos.
				</p>
				<ul className='flex flex-wrap p-0 gap-2'>
					<li>
						<span className='border-2 p-2 rounded-lg flex'>
							🪴 Personal Growth
						</span>
					</li>
					<li>
						<span className='border-2 p-2 rounded-lg flex'>🐷 Finance</span>
					</li>
					<li>
						<span className='border-2 p-2 rounded-lg flex'>🧠 Psychology</span>
					</li>
				</ul>
				{/* <button className={styles.bookButton}>Check details</button> */}
			</figcaption>
		</article>
	);
};

export { Book };
