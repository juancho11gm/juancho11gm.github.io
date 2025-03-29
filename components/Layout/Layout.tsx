import { Footer } from '@components/Footer/Footer';
import { Meta } from '@components/Meta/Meta';
import { Navbar } from '@components/Navbar/Navbar';

type Props = {
	children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<div className='dark'>
			<Meta />
			<Navbar />
			<div className='min-h-screen'>
				<main>{children}</main>
			</div>
			<Footer />
		</div>
	);
};

export { Layout };
