import Head from 'next/head';
import { Container } from '@components/Container/Container';
import { Layout } from '@components/Layout/Layout';
import { BooksGrid } from '@components/BooksGrid/BooksGrid';

export default function About() {
	return (
		<>
			<Layout>
				<Head>
					<title>Books | Juan González</title>
				</Head>
				<Container>
					<BooksGrid />
				</Container>
			</Layout>
		</>
	);
}
