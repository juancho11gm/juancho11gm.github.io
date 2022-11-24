import { ProjectExperience } from '@components/ProjectExperience/ProjectExperience';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ExperienceCard.module.css';

const ExperienceCard = () => {
	return (
		<article
			className={classNames(
				'rounded-md shadow-md p-6 mb-4 sm:mb-8 dark:shadow-pink-300 dark:shadow-sm',
				styles.experienceCard
			)}
		>
			<div className='w-24 h-24 relative flex shrink-0 mr-4'>
				<Link href='https://www.hugeinc.com/' target='_blank'>
					<Image
						src='/assets/logos/huge.jpeg'
						alt='Stellantis logo'
						fill
						sizes='100%'
					/>
				</Link>
			</div>
			<div className='flex-col'>
				<h3 className='text-lg'>
					<Link
						href='https://www.hugeinc.com/'
						target='_blank'
						className='text-purple-400'
					>
						HugeInc.
					</Link>
				</h3>
				<span className='block'> Full-time - Remote.</span>
				<time>2 yrs 4 mos</time>
			</div>
			<ProjectExperience
				title='Stellantis 🏎'
				description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quibusdam voluptatum nisi enim! Blanditiis reiciendis accusantium provident, veniam quasi impedit tempora reprehenderit enim incidunt quisquam similique vel, excepturi molestiae officia?'
				iconUrl='/assets/logos/stellantis.png'
				tags={['JavaScript', 'React', 'GSAP', 'SCSS', 'Jest', 'Puppeteer']}
			/>
			<ProjectExperience
				title='Virgin Voyages 🛳'
				description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quibusdam voluptatum nisi enim! Blanditiis reiciendis accusantium provident, veniam quasi impedit tempora reprehenderit enim incidunt quisquam similique vel, excepturi molestiae officia?'
				iconUrl='/assets/logos/virgin-voyages.png'
				tags={['TypeScript', 'SCSS']}
			/>
		</article>
	);
};

export { ExperienceCard };
