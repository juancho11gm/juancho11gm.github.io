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
					<meta property='og:image' content='/assets/blog/who-am-i/cover.jpg' />
					<meta
						name='description'
						content='Here you will find books  suggested by Juan Gonzalez.'
					/>
				</Head>
				<Container>
					<BooksGrid />
				</Container>
			</Layout>
		</>
	);
}
