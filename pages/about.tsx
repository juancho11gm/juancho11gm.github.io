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
					<title>About Juan González</title>
				</Head>
				<Container>
					<OverviewCard />
					<AboutCard />
					{/* TODO: Add interests... */}
				</Container>
			</Layout>
		</>
	);
}
