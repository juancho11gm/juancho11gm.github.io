import { Container } from '@components/Container/Container';
import { Layout } from '@components/Layout/Layout';
import Head from 'next/head';

export default function About() {
	return (
		<>
			<Layout>
				<Head>
					<title>Books | Juan González</title>
				</Head>
				<Container>
					{/* TODO: crete a custom component */}

					<div className='grid grid'>
						<div className='bg-neutral-500 border-black border-2 my-2 mx-2 w-52 h-52'></div>
						<div className='bg-neutral-500 border-black border-2 my-2 mx-2 w-52 h-52'></div>
						<div className='bg-neutral-500 border-black border-2 my-2 mx-2 w-52 h-52'></div>
						<div className='bg-neutral-500 border-black border-2 my-2 mx-2 w-52 h-52'></div>
						<div className='bg-neutral-500 border-black border-2 my-2 mx-2 w-52 h-52'></div>
						<div className='bg-neutral-500 border-black border-2 my-2 mx-2 w-52 h-52'></div>
						<div className='bg-neutral-500 border-black border-2 my-2 mx-2 w-52 h-52'></div>
						<div className='bg-neutral-500 border-black border-2 my-2 mx-2 w-52 h-52'></div>
						<div className='bg-neutral-500 border-black border-2 my-2 mx-2 w-52 h-52'></div>
						<div className='bg-neutral-500 border-black border-2 my-2 mx-2 w-52 h-52'></div>
					</div>
				</Container>
			</Layout>
		</>
	);
}
