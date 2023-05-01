import { Container } from '@components/Container/Container';
import { SpotifyNow } from '@components/SpotifyNow/SpotifyNow';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer>
			<Container>
				<hr />
				<SpotifyNow />
				<div className='grid grid-cols-2 sm:grid-cols-3 gap-4 pb-4'>
					<Link href='/'>Home</Link>
					<Link href='/projects'>Projects</Link>
					<Link href='/about'>About</Link>
					<Link href='https://github.com/juancho11gm'>GitHub</Link>
					<Link href='https://www.linkedin.com/in/juansebastiangonzalezm'>
						LinkedIn
					</Link>
				</div>
			</Container>
		</footer>
	);
};

export { Footer };
