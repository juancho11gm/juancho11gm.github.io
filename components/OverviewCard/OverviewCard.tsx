import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';
import styles from './OverviewCard.module.css';

const OverviewCard = () => {
	return (
		<section className='flex flex-col items-center sm:flex-row my-4'>
			<div
				className={classNames(
					styles.image,
					'rounded-full overflow-hidden relative flex items-center shrink-0'
				)}
			>
				<Image
					alt='Juan Gonzalez'
					src='/assets/me/pic.png'
					priority
					className='hover:scale-105 transition-transform duration-700'
					fill
					sizes='100%'
				/>
			</div>
			<div className='self-start ml-0 sm:ml-8 md:ml-12'>
				<h1 className='text-center font-bold text-3xl mt-4 sm:text-5xl sm:text-left'>
					Juan González
				</h1>
				<Link
					className='block text-center mb-2 text-gray-700 dark:text-gray-300 text-lg sm:text-left'
					href='https://github.com/juancho11gm'
					target='_blank'
				>
					@juancho11gm
				</Link>
				<p className='text-lg'>
					<strong>Web Engineer</strong> at{' '}
					<Link
						className='text-purple-500'
						href='https://kinesso.com'
						target='_blank'
					>
						Kinesso
					</Link>
					.
				</p>
				<p className='mt-4 text-lg sm:mt-6'>
					JavaScript and AI enthusiast.
				</p>
				<p className='text-gray-700 dark:text-gray-300 text-lg'>
					Learning everyday about tech and personal growth.
				</p>
			</div>
		</section>
	);
};

export { OverviewCard };
