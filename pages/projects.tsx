import Head from 'next/head';
import { Container } from '@components/Container/Container';
import { BooksGrid } from '@components/BooksGrid/BooksGrid';
import { Layout } from '@components/Layout/Layout';
import { SectionTitle } from '@components/SectionTitle/SectionTitle';

export default function Projects() {
	return (
		<>
			<Layout>
				<Head>
					<title>Books | Juan González</title>
					<meta property='og:image' content='/assets/blog/who-am-i/cover.jpg' />
					<meta
						name='description'
						content='Projects Juan Gonzalez has worked on.'
					/>
				</Head>
				<Container>
					<section className='my-8'>
						<SectionTitle text='Projects.' />
						<div className='h-40 flex items-center justify-center'>
							Work In Progress 🚧...
						</div>
					</section>
				</Container>
			</Layout>
		</>
	);
}

export { BooksGrid };
