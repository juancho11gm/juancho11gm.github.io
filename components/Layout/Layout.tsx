import { Footer } from '../Footer/Footer';
import Meta from '../meta';
import Navbar from '../Navbar/Navbar';

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
