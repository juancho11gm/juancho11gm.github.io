import { ExperienceCard } from '@components/ExperienceCard/ExperienceCard';

const AboutCard = () => {
	return (
		<section className='mb-32'>
			<p>
				Hey, I'm Juan. I'm a Systems Engineer that has been working in the
				<strong> web development</strong> world for 4 years.
			</p>
			<p className='mt-2 sm:mt-6'>
				I've worked on digital projects involved in online advertisement for the
				cars industry 📢 , online sale of cruises 🚢 and in the education area
				📚.
			</p>
			<h2 className='font-bold text-2xl mt-6 mb-4 sm:text-3xl '>Career Path</h2>
			<ul>
				<li>
					<ExperienceCard />
				</li>
			</ul>
		</section>
	);
};

export { AboutCard };
