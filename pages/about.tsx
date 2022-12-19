import Head from 'next/head';
import { OverviewCard } from '@components/OverviewCard/OverviewCard';
import { AboutCard } from '@components/AboutCard/AboutCard';
import { Container } from '@components/Container/Container';
import { Layout } from '@components/Layout/Layout';

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
					<AboutCard />
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
