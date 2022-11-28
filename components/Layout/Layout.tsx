import { Footer } from '@components/Footer/Footer';
import { Meta } from '@components/Meta/Meta';
import { Navbar } from '@components/Navbar/Navbar';

type Props = {
	children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<>
			<Meta />
			<Navbar />
			<div className='min-h-screen'>
				<main>{children}</main>
			</div>
			<Footer />
		</>
	);
};

export { Layout };
