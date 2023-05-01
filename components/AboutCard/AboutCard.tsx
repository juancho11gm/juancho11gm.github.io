import { ExperienceCard } from '@components/ExperienceCard/ExperienceCard';
import { Company } from '@interfaces/experience';

const AboutCard = ({ companies }: { companies: Company[] }) => {
	return (
		<section>
			<p>
				I'm a Web Developer with 4 years of expertise. As a self-taught
				individual contributor, I bring a proactive and innovative approach to
				every project, from inception to completion.
			</p>
			<p className='mt-2 sm:mt-6'>
				My track record of successfully leading web development projects in
				diverse industries, from online advertising to education, showcases my
				ability to adapt to new environments and technologies. I take ownership
				of the projects I work on and consistently seek out cutting-edge
				solutions and the best engineering practices, following design patterns
				and methodologies to deliver exceptional results.
			</p>
			<p className='mt-2 sm:mt-6'>
				I am a result-oriented developer who thrives in a collaborative
				environment, fostering a high level of team spirit, accountability, and
				problem-solving skills.
			</p>

			<p className='mt-2 sm:mt-6'>
				My passion for reading and learning about finance, investing, and
				personal growth keeps me up-to-date with industry trends and fuels my
				drive to innovate and excel. In my free time, I love to read about
				finance, investing, and personal growth. Also, I'm part of a book club
				called <strong> Share Your Book</strong>.
			</p>
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
