import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';
import { ProjectExperience } from '@components/ProjectExperience/ProjectExperience';
import { Company } from '@interfaces/experience';
import styles from './ExperienceCard.module.css';

const ExperienceCard = (props: Company) => {
	const { name, type, startDate, endDate, iconUrl, href, projects } = props;
	return (
		<article
			className={classNames(
				'rounded-md shadow-md p-6 mb-4 sm:mb-8 dark:shadow-pink-300 dark:shadow-sm',
				styles.experienceCard
			)}
		>
			<div className='w-24 h-24 relative flex shrink-0 mr-4'>
				<Link href={href} target='_blank'>
					<Image src={iconUrl} alt={`${name} logo`} fill sizes='100%' />
				</Link>
			</div>
			<div className='flex-col'>
				<h3 className='text-lg'>
					<Link href={href} target='_blank' className='text-purple-400'>
						{name}.
					</Link>
				</h3>
				<span className='block'> {type}.</span>
				<time>2 yrs 4 mos</time>
			</div>

			{projects.map((project, index) => {
				return (
					<ProjectExperience
						key={`${name}-${index}`}
						name={project.name}
						description={project.description}
						iconUrl={project.iconUrl}
						tags={project.tags}
					/>
				);
			})}
		</article>
	);
};

export { ExperienceCard };
