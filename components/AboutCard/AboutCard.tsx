import { ExperienceCard } from '@components/ExperienceCard/ExperienceCard';
import { Company } from '@interfaces/experience';
import Link from 'next/link';

const AboutCard = ({ companies }: { companies: Company[] }) => {
	return (
		<section>
			<p>
				Hey, I'm Juan. I'm a Systems Engineer that has been working in the
				<strong> web development</strong> world for 4 years.
			</p>
			<p className='mt-2 sm:mt-6'>
				I've worked on digital projects involved in online advertisement for the
				cars industry 📢 , online sale of cruises 🚢 and in the education area
				📚.
			</p>
			<p className='mt-2 sm:mt-6'>
				I am a strong team player and a proactive individual contributor. I’ve
				led web development projects from different industries, from the online
				advertisement world, to the education area (to grow transformative
				careers in technology). I take ownership of the projects I work on. I
				always seek tech solutions and I form into the best engineering
				practices, following design patterns and methodologies. I am a
				result-oriented developer. A high level of team spirit, accountability,
				and problem-solving are some of the competencies I foster in the teams
				in which I participate.
			</p>
			<p className='mt-2 sm:mt-6'>
				In my free time, I love to read about finance, investing, and personal
				growth. Also, I'm part of a book club called{' '}
				<strong>Share Your Book</strong>. It was born in October 2022. We are a
				group of friends that share the books' insights of different topics
				through stories and experiences.
			</p>
			<p className='mt-2 sm:mt-6'>I'm a traveller and soccer player. 🌎</p>
			<h2 className='font-bold text-2xl mt-6 mb-4 sm:text-3xl '>Career Path</h2>
			<ul>
				{companies.map(
					(
						{ name, type, startDate, endDate, iconUrl, href, projects },
						index
					) => {
						return (
							<li key={`${name}-${index}`}>
								<ExperienceCard
									name={name}
									type={type}
									startDate={startDate}
									endDate={endDate}
									iconUrl={iconUrl}
									href={href}
									projects={projects}
								/>
							</li>
						);
					}
				)}
			</ul>
		</section>
	);
};

export { AboutCard };
