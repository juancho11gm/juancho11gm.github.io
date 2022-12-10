import classNames from 'classnames';
import { ProjectExperience } from '@interfaces/projects';
import styles from './ProjectExperience.module.css';
import Image from 'next/image';

const ProjectExperience = ({
	name = '',
	role = '',
	description = '',
	iconUrl,
	tags = [],
}: ProjectExperience) => {
	const tagList = tags.map((tag) => (
		<li
			key={tag}
			className='bg-gray-200 rounded-md p-1 text-gray-700 dark:text-gray-300 dark:bg-gray-500'
		>
			{tag}
		</li>
	));

	return (
		<div
			className={classNames('col-span-2 pl-12 mt-4 sm:mt-6', styles.project)}
		>
			<span className={styles.icon}>
				<Image
					alt='Icon'
					className={styles.iconImage}
					src={iconUrl}
					fill
					sizes='100%'
				/>
			</span>
			<h4 className='font-bold'>{name}</h4>
			<h5 className='text-gray-700 dark:text-gray-300'>{role}</h5>
			<p className='mb-2 mt-2'>{description}</p>
			<ul className='flex flex-wrap gap-2 sm:gap-4'>{tagList}</ul>
		</div>
	);
};

export { ProjectExperience };
