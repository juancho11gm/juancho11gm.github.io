import classNames from 'classnames';
import { ProjectExperience } from '@interfaces/projects';
import styles from './ProjectExperience.module.css';
import Image from 'next/image';

const ProjectExperience = ({
	name = '',
	description = '',
	iconUrl,
	tags = [],
}: ProjectExperience) => {
	const tagList = tags.map((tag) => (
		<li
			key={tag}
			className='bg-gray-200 rounded-md p-2 text-gray-500 dark:text-gray-200 dark:bg-gray-500'
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
			<p className='mb-2'>{description}</p>
			<ul className='flex flex-wrap gap-2 sm:gap-4'>{tagList}</ul>
		</div>
	);
};

export { ProjectExperience };
