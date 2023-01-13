import Head from 'next/head';
import { Company } from '@interfaces/experience';
import { OverviewCard } from '@components/OverviewCard/OverviewCard';
import { AboutCard } from '@components/AboutCard/AboutCard';
import { Container } from '@components/Container/Container';
import { Layout } from '@components/Layout/Layout';

const companies: Company[] = [
	{
		name: 'HugeInc',
		type: 'Full-time - Remote',
		startDate: 'Aug/2020',
		iconUrl: '/assets/logos/huge.jpg',
		href: 'https://www.hugeinc.com',
		projects: [
			{
				name: 'Stellantis 🏎',
				role: 'Web Engineer',
				description: `Business and technical development of advertising units for the major automotive brands in the Stellantis' The advertising pieces were seen by millions of users worldwide.`,
				iconUrl: '/assets/logos/stellantis.png',
				tags: [
					'JavaScript',
					'React',
					'GSAP',
					'SCSS',
					'Jest',
					'RTL',
					'Puppeteer',
				],
			},
			{
				name: 'Virgin Voyages 🛳',
				role: 'Web Engineer',
				description:
					'Development of the frontend components for the Content Management System to raise the customer conversion rate.',
				iconUrl: '/assets/logos/virgin-voyages.png',
				tags: ['TypeScript', 'SCSS', 'Magnolia', 'FTL'],
			},
			{
				name: 'COX 📞',
				role: 'Full Stack Engineer',
				description:
					'Development of a web crawler that analyzes natural language to improve the client engagement funnel.',
				iconUrl: '/assets/logos/cox.png',
				tags: [
					'Vite',
					'TypeScript',
					'React',
					'Tailwind',
					'Python',
					'FastAPI',
					'GPT-3',
					'Textstat',
					'BeautifulSoup',
				],
			},
		],
	},
	{
		name: 'PushDev',
		type: 'Part-time - Remote',
		startDate: 'Nov/2019',
		iconUrl: '/assets/logos/pushdev.jpg',
		href: 'https://github.com/pushdev-code',
		projects: [
			{
				name: 'Web development Bootcamps',
				role: 'Co-founder and Web Engineer',
				description:
					'Directed Full Stack web development classes using tools such as GIT, HTML, CSS and JavaScript.',
				iconUrl: '/assets/logos/pushdev-bootcamps.jpg',
				tags: ['HTML', 'CSS', 'GIT', 'JavaScript', 'React'],
			},
		],
	},
	{
		name: 'Pontificia Universidad Javeriana',
		type: 'Part-time - On-site',
		startDate: 'Jan/2017',
		endDate: 'Nov/2019',
		iconUrl: '/assets/logos/javeriana.png',
		href: 'https://www.javeriana.edu.co/inicio',
		projects: [
			{
				name: 'Basic algorithms and Object Oriented Programming',
				role: 'Teacher Assistant',
				description:
					'Drive students to the best practices in basic algorithms and object-oriented programming classes (C++, Java) by giving classes and giving valuable feedback.',
				iconUrl: '/assets/logos/code.jpeg',
				tags: ['C++', 'Java'],
			},
			{
				name: 'Red Somos',
				role: 'Engineer Intern',
				description:
					'Develop and implement new documentation to manage the indicators of the strategic plan.',
				iconUrl: '/assets/logos/red-somos.jpeg',
				tags: ['Google Sheets', 'Visual Basic'],
			},
		],
	},
];

export default function About() {
	return (
		<>
			<Layout>
				<Head>
					<title>About | Juan González</title>
					<meta property='og:image' content='/assets/blog/who-am-i/cover.jpg' />
				</Head>
				<Container>
					<OverviewCard />
					<AboutCard companies={companies} />
					<p className='my-4'>
						Beyond coding, in my free time I read 📚, travel 🛩 and do exercise
						🏋🏻‍♂️. I'm planning to create a new page to talk about places I visit,
						but that is WIP 🚧.
					</p>
				</Container>
			</Layout>
		</>
	);
}
