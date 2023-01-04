import useSWR from 'swr';
import { ExperienceCard } from '@components/ExperienceCard/ExperienceCard';
import { Company } from '@interfaces/experience';
import { fetcher } from '@lib/fetcher';

const AboutCard = () => {
	// Client Side SWR (Stale while revalidate)
	const { data, error } = useSWR<Company[]>('/api/experience', fetcher);

	if (error || !data) return <></>;
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
			<h2 className='font-bold text-2xl mt-6 mb-4 sm:text-3xl '>Career Path</h2>
			<ul>
				{data.map(
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
